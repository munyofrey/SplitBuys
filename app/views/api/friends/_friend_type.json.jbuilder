friends.each do |friend|
  json.set! friend.id do
    json.extract! friend, :id, :name
  end
end
