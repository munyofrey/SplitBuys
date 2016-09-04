class Api::UsersController < ApplicationController

  def index
    @users = User.all.where('id != 1')  #FIX FOR NOT GUEST USER!!!
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
