class Api::CommentsController < ApplicationController

  def show
    comments = Bill.comments_and_names(params[:id])
    render json: comments
  end

  def create
    comment = Comment.new(commment_params)
    commment.user_id = current_user.id
    if comment.save
      comments = Bill.comments_and_names(params[:id])
      render json: comments
    else
      render json: comment.errors.full_messages, status: 422
    end
  end


  def destroy
    comment = Comment.find_by_id(params[:id])
    if comment
      comment.destroy
    end
    comments = Bill.comments_and_names(params[:id])
    render json: comments
  end

  private

  def comment_params
    params.require(:comment).permit(:bill_id, :body)
  end


end
