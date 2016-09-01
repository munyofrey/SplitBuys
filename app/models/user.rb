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

  #bills

  def all_bills
    query1 = "(SELECT total, bills.description, bills.note, bills.id, bills.user_owe_id as other_user_id, paid.name as name_payer, owed, date, ower.name as ower
      FROM bills
      JOIN users as ower ON bills.user_owe_id = ower.id
      JOIN users AS paid ON paid.id = bills.user_pay_id
      WHERE bills.user_pay_id = #{self.id}
      "
    query2 = "SELECT total, bills.description, bills.note, bills.user_pay_id as other_user_id, bills.id, paid.name as ower, owed, date, ower.name as name_payer
      FROM bills
      JOIN users as paid ON bills.user_pay_id = paid.id
      JOIN users AS ower ON ower.id = bills.user_owe_id
      WHERE bills.user_owe_id = #{self.id})
      "
    query = "SELECT * FROM " + query1 + ' UNION ' + query2 + ' AS together ORDER BY date DESC '
    Bill.find_by_sql(query)
  end

  def all_bills_for_friend(friend_id)
    query1 = "(SELECT total, bills.id, bills.user_owe_id as other_user_id, paid.name as name_payer, owed, date, ower.name as ower
      FROM bills
      JOIN users as ower ON bills.user_owe_id = ower.id
      JOIN users AS paid ON paid.id = bills.user_pay_id
      WHERE bills.user_pay_id = #{self.id} AND bills.user_owe_id = #{friend_id}
      "
    query2 = "SELECT total, bills.user_pay_id as other_user_id, bills.id, paid.name as ower, owed, date, ower.name as name_payer
      FROM bills
      JOIN users as paid ON bills.user_pay_id = paid.id
      JOIN users AS ower ON ower.id = bills.user_owe_id
      WHERE bills.user_owe_id = #{self.id} AND bills.user_pay_id = #{friend_id})
      "
    query = "SELECT * FROM " + query1 + ' UNION ' + query2 + ' AS together ORDER BY date DESC '
    Bill.find_by_sql(query)
  end


  def sums
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
