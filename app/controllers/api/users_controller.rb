class Api::UsersController < ApplicationController

  def index
    # Gives friends that are not users
    # User.all.where.not(id: "#{self.friend_items.pluck(:user_two_id)} or #{self.request_items.where('pending="true"')pluck(:user_one_id)} )


    # usersStart = User.all.where("id != #{current_user.id}")
    # friends = current_user.friends
    # @users = []
    # usersStart.each  do |user|
    #   unless friends.include?(user) || current_user.requests.where('pending = true').include?(user)
    #     @users.push(user)
    #   end
    # end
    @users = User.where
                .not(id: (Friend.where(user_one_id: current_user.id).pluck(:user_two_id) + Friend.where(user_two_id: current_user.id).pluck(:user_one_id) + [current_user.id]))
                .where("lower(name) LIKE '#{params[:queryParams].downcase}%'")
    render json: @users
    # render 'api/users/index'
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
