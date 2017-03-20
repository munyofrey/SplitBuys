class Api::UsersController < ApplicationController

  def index
    @users = User.where
                .not(id: (Friend.where(user_one_id: current_user.id).pluck(:user_two_id) + Friend.where(user_two_id: current_user.id).pluck(:user_one_id) + [current_user.id]))
                .where("lower(name) LIKE '#{params[:queryParams].downcase}%'")
    # render json: @users
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
