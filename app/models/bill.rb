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

  has_many :comments

  attr_accessor :name_payer_c, :other_user_id_c, :ower_c

  belongs_to :payer,
  primary_key: :id,
  foreign_key: :user_pay_id,
  class_name: :User

  belongs_to :borrower,
  primary_key: :id,
  foreign_key: :user_owe_id,
  class_name: :User

  def self.comments_and_names(bill_id)
    comments = ActiveRecord::Base.connection.execute(<<-SQL)
      SELECT comments.body, users.name, comments.id, comments.user_id as user_id, #{bill_id} as bill_id
      FROM comments
      JOIN users ON users.id = comments.user_id
      WHERE comments.bill_id = #{bill_id}
      ORDER BY comments.created_at ASC
      SQL
      comments.map{|comment|  comment}
  end



end
