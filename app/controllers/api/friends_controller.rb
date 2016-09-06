class Api::FriendsController < ApplicationController

  def index
    render json: current_user.find_friends
  end


  def show
    @bills = current_user.all_bills_for_friend(params[:id])
    render json: @bills
  end

  def create
    @friend = Friend.new(create_params)

    if current_user.requests.where('pending = true').include?(User.find_by_id(create_params[:user_two_id]))
      @friend.pending = false
      Friend.update({
        user_two_id: create_params[:user_one_id].to_i,
        user_one_id: create_params[:user_two_id].to_i,
        })
    end

    if @friend.save
      render json: current_user.find_friends
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end


private

def create_params
  params.require(:friend).permit(:user_one_id, :user_two_id)
end


end
