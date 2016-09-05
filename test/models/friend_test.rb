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

require 'test_helper'

class FriendTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
