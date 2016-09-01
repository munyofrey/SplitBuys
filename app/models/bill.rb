# == Schema Information
#
# Table name: bills
#
#  id          :integer          not null, primary key
#  date        :date             not null
#  description :string           not null
#  user_pay_id :integer          not null
#  user_owe_id :integer          not null
#  owed        :float            not null
#  total       :float            not null
#  note        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bill < ActiveRecord::Base

  validates :user_pay_id, :user_owe_id, :owed, :total, :description, :date, presence:true
  

  belongs_to :payer,
  primary_key: :id,
  foreign_key: :user_pay_id,
  class_name: :User

  belongs_to :borrower,
  primary_key: :id,
  foreign_key: :user_owe_id,
  class_name: :User



end
