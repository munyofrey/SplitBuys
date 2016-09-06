# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  password_digest :string           not null
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string           not null
#

class User < ActiveRecord::Base

  validates :session_token, :email, presence: true, uniqueness:true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, :name, presence:true

  has_many :owed_bills,
  primary_key: :id,
  foreign_key: :user_owe_id,
  class_name: :Bill

  has_many(:paid_bills,
  primary_key: :id,
  foreign_key: :user_pay_id,
  class_name: "Bill")

  has_many :friend_items,
  primary_key: :id,
  foreign_key: :user_one_id,
  class_name: 'Friend'

  has_many :request_items,
  primary_key: :id,
  foreign_key: :user_two_id,
  class_name: 'Friend'

  has_many :friends,
  through: :friend_items,
  source: :friend_two

  has_many :requests,
  through: :request_items,
  source: :friend_one




  #bills

  def all_bills
    bills = ActiveRecord::Base.connection.execute(<<-SQL)
      SELECT bills.id, total, bills.description, bills.note, bills.user_owe_id as other_user_id, paid.name as name_payer, owed, date, ower.name as ower
          FROM bills
          JOIN users as ower ON bills.user_owe_id = ower.id
          JOIN users AS paid ON paid.id = bills.user_pay_id
          WHERE bills.user_pay_id = #{self.id}
      UNION
      SELECT bills.id, total, bills.description, bills.note, bills.user_pay_id as other_user_id, paid.name as ower, owed, date, ower.name as name_payer
          FROM bills
          JOIN users as paid ON bills.user_pay_id = paid.id
          JOIN users AS ower ON ower.id = bills.user_owe_id
          WHERE bills.user_owe_id = #{self.id}

      ORDER BY date DESC
      SQL
    bills.map{|bill|  bill}
  end

  def all_bills_for_friend(friend_id)
    bills = ActiveRecord::Base.connection.execute(<<-SQL)
      SELECT bills.id, total, bills.description, bills.note, bills.user_owe_id as other_user_id, paid.name as name_payer, owed, date, ower.name as ower
          FROM bills
          JOIN users as ower ON bills.user_owe_id = ower.id
          JOIN users AS paid ON paid.id = bills.user_pay_id
          WHERE bills.user_pay_id = #{self.id} AND bills.user_owe_id = #{friend_id}
      UNION
      SELECT bills.id, total, bills.description, bills.note, bills.user_pay_id as other_user_id, paid.name as ower, owed, date, ower.name as name_payer
          FROM bills
          JOIN users as paid ON bills.user_pay_id = paid.id
          JOIN users AS ower ON ower.id = bills.user_owe_id
          WHERE bills.user_owe_id = #{self.id} AND user_pay_id = #{friend_id}

      ORDER BY date DESC
      SQL
    bills.map{ |bill| bill }
  end


  def sums
    bill_sums = ActiveRecord::Base.connection.execute(<<-SQL)
      SELECT name, users.id, SUM(paid.owed) as sum
      FROM bills as paid
          JOIN users ON users.id = paid.user_owe_id
      WHERE paid.user_pay_id = #{self.id}
      GROUP BY users.id
      SQL
    bill_negs = ActiveRecord::Base.connection.execute(<<-SQL)
      SELECT name, users.id, SUM(paid.owed) as sum
      FROM bills as paid
          JOIN users ON users.id = paid.user_pay_id
      WHERE paid.user_owe_id = #{self.id}
      GROUP BY users.id
      SQL
    bill_to = Hash.new()
    pos = bill_sums.map do |bill|
      bill_to[bill['id'].to_i] = {
        'sum' => bill['sum'].to_f.round(2),
        'name' => bill['name'],
        'id' => bill['id'].to_i}

    end
    neg = bill_negs.map do |bill|
      if bill_to[bill['id'].to_i]
        bill_to[bill['id'].to_i]['sum'] = (bill_to[bill['id'].to_i]['sum'] - bill['sum'].to_f).round(2)
      else
        bill_to[bill['id'].to_i] = {
          'sum' => bill['sum'].to_f.round(2),
          'name' => bill['name'],
          'id' => bill['id'].to_i}
      end
    end
    bill_owed_to = []
    bill_owed_by = []
    bill_to.keys.each do |key|
      if bill_to[key]['sum'] < 0
        bill_to[key]['sum']= bill_to[key]['sum'].abs
        bill_owed_by.push(bill_to[key])
      elsif bill_to[key]['sum'] > 0
        bill_owed_to.push(bill_to[key])
      end
    end
    [bill_owed_by, bill_owed_to]
  end

  def find_friends
    friends = self.friends.where('pending=false')
    pending = self.friends.where('pending=true')
    requests = self.requests.where('pending=true')
    [friends, pending, requests]
  end



  #auth

  attr_reader :password
  before_validation :ensure_session_token

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
