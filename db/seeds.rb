# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(name:'tester', email:'guestuser@splitbys.com', password: 'password');

15.times{
  user = {
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: Faker::Internet.password(6)
    }
  User.create!(user)
}

10.times{
  Bill.create!(
  description: Faker::Hipster.sentence(3),
  note: Faker::Hipster.paragraph(3),
  total: 100.50,
  owed: rand(1.00..100.50).round(2),
  user_pay_id: 1,
  user_owe_id: rand(2..15),
  date: Faker::Date.between(90.days.ago, Date.today)
  )
}

10.times{
  Bill.create!(
  description: Faker::Hipster.sentence(3),
  note: Faker::Hipster.paragraph(3),
  total: 100.50,
  owed: rand(1.00..100.50).round(2),
  user_owe_id: 1,
  user_pay_id: rand(2..15),
  date: Faker::Date.between(90.days.ago, Date.today)
  )
}
