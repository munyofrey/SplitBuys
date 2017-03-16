@bills.each do |bill|
  json.set! bill.id do
    json.partial! 'api/bills/bills', locals:{ bill: bill}
  end
end
