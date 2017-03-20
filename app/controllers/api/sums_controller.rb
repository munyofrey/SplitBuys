class Api::SumsController < ApplicationController

  def index
    @totals = current_user.sums
    render json: @totals
  end

end
