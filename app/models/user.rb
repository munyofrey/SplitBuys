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

  validates :session_token, :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, :name, presence: true

  has_many :owed_bills,
  primary_key: :id,
  foreign_key: :user_owe_id,
  class_name: :Bill

  has_many :paid_bills,
  primary_key: :id,
  foreign_key: :user_pay_id,
  class_name: :Bill

  has_many :friend_items,
  primary_key: :id,
  foreign_key: :user_one_id,
  class_name: :Friend

  has_many :request_items,
  primary_key: :id,
  foreign_key: :user_two_id,
  class_name: :Friend

  has_many :friends,
  through: :friend_items,
  source: :friend_two

  has_many :requests,
  through: :request_items,
  source: :friend_one




  #bills

  def all_bills
    self.owed_bills
    .includes("comments") + self.paid_bills
    .includes("comments")
  end

  def all_bills_for_friend(friend_id)
    self.owed_bills
        .where(user_pay_id: friend_id)
        .includes("comments") + self.paid_bills
        .where(user_owe_id: friend_id)
        .includes("comments")
  end

  def sums
    bought = Bill.where(user_pay_id:self.id, user_owe_id:self.friend_items.pluck(:user_two_id))
                 .group(:user_owe_id).sum(:owed)
    owed = Bill.where(user_owe_id:self.id, user_pay_id:self.friend_items.pluck(:user_two_id))
               .group(:user_pay_id).sum(:owed)
    bought.merge(owed){|key, paid, owed| (paid - owed).round(2) }
  end

  def find_friends
    friends = self.friends.where('pending=false').select(:id, :name)
    pending = self.friends.where('pending=true').select(:id, :name)
    requests = self.requests.where('pending=true').select(:id, :name)
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
