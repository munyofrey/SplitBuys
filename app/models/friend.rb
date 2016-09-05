# == Schema Information
#
# Table name: friends
#
#  id          :integer          not null, primary key
#  user_one_id :integer          not null
#  user_two_id :integer          not null
#  pending     :boolean          default(TRUE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Friend < ActiveRecord::Base

validates :user_one_id, :user_two_id, presence:true
validates_uniqueness_of :user_one_id, :scope => :user_two_id

  belongs_to :friend_two,
  primary_key: :id,
  foreign_key: :user_two_id,
  class_name: 'User'

  belongs_to :friend_one,
  primary_key: :id,
  foreign_key: :user_one_id,
  class_name: 'User'


def self.update(params)
  friend = Friend.find_by(params)
  if friend.update({pending: false})
    puts 'I WORKED'
  else
    puts 'Life isn\'t all that great'
  end
end


end
