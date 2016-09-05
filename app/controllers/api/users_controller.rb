class Api::UsersController < ApplicationController

  def index
    usersStart = User.all.where("id != #{current_user.id}")
    friends = current_user.friends
    @users = []
    usersStart.each  do |user|
      unless friends.include?(user) || current_user.requests.where('pending = true').include?(user)
        @users.push(user)
      end
    end
    render 'api/users/index'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end

end
