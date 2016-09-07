class Comment < ActiveRecord::Base

validates :body, :user_id, :bill_id, presence:true

belongs_to :bill
belongs_to :user





end
