
json.array!(@bills) do |bill|
  json.partial!('bills', bill: bill, show_bill: false)
end
