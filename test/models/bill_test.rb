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

require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
