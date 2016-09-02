
json.array!(@bills) do |bill|
  json.partial!('bills_queries', bill: bill)
end
