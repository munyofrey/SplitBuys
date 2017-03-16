class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: comment.errors.full_messages, status: 422
    end
  end


  def destroy
    @comment = Comment.find_by_id(params[:id])
    if @comment
      @comment.destroy
    else
      render json: @comment.errors.full_messages, status: 422
    end
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:bill_id, :body)
  end
end
