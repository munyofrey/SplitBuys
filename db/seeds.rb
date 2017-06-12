# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(name:'Angela', email:'guestuser@splitbys.com', password: 'password');
# User.create!(name:'Demo', email:'demo@splitbys.com', password: 'password');


20.times{
  user = {
    name: Faker::Name.first_name,
    email: Faker::Internet.email,
    password: Faker::Internet.password(6)
    }
  User.create!(user)
}

Friend.create(user_one_id:1, user_two_id: 2)
Friend.create(user_one_id:7, user_two_id: 1)
Friend.create(user_one_id:8, user_two_id: 1)
Friend.create(user_one_id:1, user_two_id: 4, pending: false)
Friend.create(user_one_id:4, user_two_id: 1, pending: false)
Friend.create(user_one_id:1, user_two_id: 3, pending: false)
Friend.create(user_one_id:3, user_two_id: 1, pending: false)
Friend.create(user_one_id:1, user_two_id: 5, pending: false)
Friend.create(user_one_id:5, user_two_id: 1, pending: false)
Friend.create(user_one_id:1, user_two_id: 6, pending: false)
Friend.create(user_one_id:6, user_two_id: 1, pending: false)
bills = []

10.times{
  random_tot = rand(10.00..150.3).round(2)
  bills.push(Bill.create!(
  description: Faker::Hipster.sentence(3),
  note: Faker::Hipster.paragraph(2),
  total: random_tot,
  owed: random_tot.round(2),
  user_pay_id: 1,
  user_owe_id: rand(3..6),
  date: Faker::Date.between(90.days.ago, Date.today)
  ))
}

10.times{
  random_tot = rand(10.00..150.3).round(2)
  bills.push(Bill.create!(
  description: Faker::Hipster.sentence(3),
  note: Faker::Hipster.paragraph(2),
  total: random_tot,
  owed: random_tot.round(2),
  user_owe_id: 1,
  user_pay_id: rand(3..6),
  date: Faker::Date.between(90.days.ago, Date.today)
  ))
}


bills.each do |bill|
  Comment.create!({
    body: Faker::Hipster.sentence(2),
    user_id: bill.user_pay_id,
    bill_id: bill.id
    })
  Comment.create!({
    body: Faker::Hipster.sentence(2),
    user_id: bill.user_owe_id,
    bill_id: bill.id
    })
  end

20.times do
  bill = bills.sample
  Comment.create!({
    body: Faker::Hipster.sentence(2),
    user_id: bill.user_owe_id,
    bill_id: bill.id
    })
end
