# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(name:'Angela', email:'guestuser@splitbys.com', password: 'password');

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



20.times{
  user = {
    name: Faker::Name.first_name,
    email: Faker::Internet.email,
    password: Faker::Internet.password(6)
    }
  User.create!(user)
}

10.times{
  Bill.create!(
  description: Faker::Hipster.sentence(3),
  note: Faker::Hipster.paragraph(2),
  total: 100.50,
  owed: rand(1.00..100.50).round(2),
  user_pay_id: 1,
  user_owe_id: rand(3..6),
  date: Faker::Date.between(90.days.ago, Date.today)
  )
}

10.times{
  Bill.create!(
  description: Faker::Hipster.sentence(3),
  note: Faker::Hipster.paragraph(2),
  total: 100.50,
  owed: rand(1.00..100.50).round(2),
  user_owe_id: 1,
  user_pay_id: rand(3..6),
  date: Faker::Date.between(90.days.ago, Date.today)
  )
}
