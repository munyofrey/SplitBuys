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
    query1 = "(SELECT total, bills.id, owed, date, name
      FROM bills
      JOIN users ON bills.user_owe_id = users.id
      WHERE bills.user_pay_id = #{self.id}
      "
    query2 = "SELECT total, bills.id, (-1)*owed as owed, date, name
      FROM bills
      JOIN users ON bills.user_pay_id = users.id
      WHERE bills.user_owe_id = #{self.id})
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
