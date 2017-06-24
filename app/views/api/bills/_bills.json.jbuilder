json.extract! bill,
  :id,
  :date,
  :owed,
  :total,
  :description,
  :note,
  :user_pay_id,
  :user_owe_id


    json.comments do
      bill.comments.each do |comment|
        json.set! comment.id do
          json.partial! 'api/bills/comments', locals:{ comment: comment}
        end
      end
    end
# : user, :name
