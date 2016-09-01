class Api::BillsController < ApplicationController

  def index
    @user = current_user
    @bills = @user.all_bills

    render 'api/bills/index'
  end

  def create
    @bill = Bill.new(bill_params)
    unless current_user && (@bill.user_owe_id == current_user.id || @bill.user_pay_id == current_user.id)
      render json: ["You can't add a bill if you aren't a borrower or payer"],
             status: 403
    end
    if @bill.save!
      if @bill.user_owe_id == current_user.id
        @user = User.find_by_id(@bill.user_pay_id)
        bill[name_payer] = @user.name
        bill[ower] = current_user.name
        bill[other_user_id] = @user.id
        render 'api/bills/show'
      else
        @user = @bill.user_owe_id
        @user = User.find_by_id(@bill.user_owe_id)
        bill[ower] = @user.name
        bill[other_user_id] = @user.id
        bill[name_player] = current_user.name
        render 'api/bills/show'
      end
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  def show
    @bill = Bill.find_by_id(params[:id]);
    if current_user.id == @bill.user_owe_id
      other_user = User.find_by_id(@bill.user_pay_id)
      @bill.other_user = other_user.name
      @bill.other_user_id = other_user.id
      render 'api/bills/show'
    elsif current_user.id == @bill.user_pay_id
      other_user = User.find_by_id(@bill.user_owe_id)
      @bill.other_user = other_user.name
      @bill.other_user_id = other_user.id
      render 'api/bills/show'
    else
      render json: ["You can't at other people's bills!"],
             status: 403
    end
  end

  def update
    @bill = Bill.find_by_id(params[:id])
    unless  current_user && (@bill.user_owe_id == current_user.id || @bill.user_pay_id == current_user.id)
      render(json: ["You can't add a bill if you aren't a borrower or payer"],
             status: 403)
      return
    end
    if @bill && @bill.update(bill_params)
      if @bill.user_owe_id == current_user.id
        @user = @bill.user_pay_id
        render 'api/bills/show'
      else
        @user = @bill.user_owe_id
        render 'api/bills/show'
      end
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  def destroy
    @bill = Bill.find_by_id(params[:id])
    unless @bill.user_owe_id == current_user.id || @bill.user_pay_id == current_user.id
      render json: ["You can't add a bill if you aren't a borrower or payer"],
             status: 403
    end
    if @bill
      @bill.delete
    end
    render json: {}
  end

  private

  def bill_params
    params.require(:bill).permit(:description, :note, :user_owe_id, :user_pay_id, :date, :owed, :total)
  end


end
