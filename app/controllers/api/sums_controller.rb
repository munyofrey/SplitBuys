class Api::SumsController < ApplicationController

  def index
    @user = current_user
    @totals = current_user.sums
    render json: @totals
  end

end
