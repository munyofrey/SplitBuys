class Api::FriendsController < ApplicationController

  def index
    @friends =  current_user.find_friends
    # render json: current_user.find_friends
  end


  def show
    @bills = current_user.all_bills_for_friend(params[:id])
    render json: @bills
  end

  def create
    @friend = Friend.new(friend_params)

    if current_user.requests.where('pending = true').include?(User.find_by_id(friend_params[:user_two_id]))
      @friend.pending = false
      Friend.update({
        user_two_id: friend_params[:user_one_id].to_i,
        user_one_id: friend_params[:user_two_id].to_i,
        })
    end

    if @friend.save
      @friends = current_user.find_friends
      render :index
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end


  def destroy
    friend_one = Friend.find_by({
      user_two_id: current_user.id,
      user_one_id: params[:id].to_i,
      })
    friend_two = Friend.find_by({
      user_two_id: params[:id].to_i,
      user_one_id: current_user.id,
      })
    if friend_one
      friend_one.delete
    end
    if friend_two
      friend_two.delete
    end
    render json: current_user.find_friends
  end


private

def friend_params
  params.require(:friend).permit(:user_one_id, :user_two_id)
end


end
