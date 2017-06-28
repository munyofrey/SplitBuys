# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(name:'Munyo', email:'guestuser@splitbys.com', password: 'password');

names = [
  "Andy",
  "Alexander",
  "Asha",
  "Amelia",
  "Ben",
  "Becca",
  "Brianna",
  "Chris",
  "Connor",
  "Colin",
  "Dave",
  "Diana",
  "Daisy",
  "Daniel",
  "Edward",
  "Eric",
  "Eva",
  "Finley",
  "Faith",
  "Greg",
  "Hannah",
  "Ian",
  "Jenny",
  "Josh",
  "Kate",
  "Lauren",
  "Maddie",
  "Molly",
  "Natalie",
  "Owen",
  "Peter",
  "Stephanie",
  "Shawn",
  "Sophie"
]

names.shuffle!
num = names.length

num.times{
  user = {
    name: names.pop,
    email: Faker::Internet.email,
    password: Faker::Internet.password(6)
    }
  User.create!(user)
}

Friend.create(user_one_id: 1, user_two_id: 2, pending: false)
Friend.create(user_one_id: 2, user_two_id: 1, pending: false)

Friend.create(user_one_id: 1, user_two_id: 3, pending: false)
Friend.create(user_one_id: 3, user_two_id: 1, pending: false)

Friend.create(user_one_id: 1, user_two_id: 4, pending: false)
Friend.create(user_one_id: 4, user_two_id: 1, pending: false)


Friend.create(user_one_id: 1, user_two_id: 5, pending: false)
Friend.create(user_one_id: 5, user_two_id: 1, pending: false)

Friend.create(user_one_id: 1, user_two_id: 6, pending: false)
Friend.create(user_one_id: 6, user_two_id: 1, pending: false)

Friend.create(user_one_id: 7, user_two_id: 1)
Friend.create(user_one_id: 8, user_two_id: 1)
Friend.create(user_one_id: 9, user_two_id: 1)
Friend.create(user_one_id: 1, user_two_id: 10)

bills = []

bill_info = [
  [2, "Cleaning supplies", 50, 25, "Amazon bi-annual stock up. See fridge for receipt."],
  [2, "Electric Bill", 30,  15, ""],
  [2, "Internet Bill", 40, 20, ""],
  [2, "Shared Groceries", 36.50, 15.75, "eggs, milk, french bread, cucumbers, salsa, butter, PB, seltzer"],
  [2, "Air BnB in Portland", 525, 130, "it was great to travel with you!"],
  [3, "Jenny's birthday gift", 30, 20, "Issac said that you were covering his share?"],
  [4, "Dosa", 50, 22.45, "We really should go out together more!"],
  [5, "Dinner at Tacolicious", 70, 19.5, "I wish their cocktails weren't so good - and so expensive!"],
  [4, "Papalote", 26.70, 10.50, "Tofu burritos for the win!"],
  [2, "El Rio", 36, 7, "For your Paloma I paid for."],
  [4, "the royal cuckoo", 21, 11, "manhattans and tip for the organ payer"],
  [6,"cal academy of sciences", 35.95, 35.95, "I bought your ticket in advance so we wouldn't have to wait in line"],
  [5, "Exploratorium tickets", 29.95, 29.95, "We should definitely go to more museums together"],
  [6,"Muir Wood's trip", 30, 7.50, "Gas and snacks - it didn't seem like you ate as much as Jon and I so I dropped your share a bit."],
  [4, "Mt Tam hiking", 10, 5, ""],
  [3, "mt diablo gas", 15, 5, "Let's try and make hiking an every other weekend activity!"],
  [4, "Lyft to Becca's Party", 23.45, 11.73, ""],
  [3, "Goodwill trip", 56.73, 17.31, "I covered your new dishes and polka-dot dress" ]
]


num_bill = bill_info.length

num_bill.times{
  bill = bill_info.pop
  who_owes = rand(1..2) == 1 ? 1 : bill[0]
  who_paid = who_owes == 1 ? bill[0] : 1
  bills.push(Bill.create!(
  description: bill[1],
  note: bill[4],
  total: bill[2],
  owed: bill[3],
  user_pay_id: who_paid,
  user_owe_id: who_owes,
  date: Faker::Date.between(40.days.ago, Date.today)
  ))
}

comments_info = [
  ["Took a look - will pay back soon"],
  ["Didn't I pay for this?", "Nope I did"],
  [],
  ["Thanks for picking these things up!", "I just wanted fizzy water"],
  ["such a good trip!  <3"],
  ["Yeah - I got Issac's share"],
  ["I had so much fun"],
  ["We really had too many cocktails - thanks for treating me to a few. :)"],
  [],
  ["We need to get the group together more often!"],
  ["my favorite spot"],
  ["Thanks for getting them in advance. I loved seeing the butterflies!"],
  ["Sooooo freaking cool!", "Want to go to cal academy of sciences next time?"],
  ["oh thanks for noticing - I'm happy to pay more if you'd prefer though", "no worries"],
  ["I love our hiking trips!"],
  ["I'm down - lets get a bunch of people together!"],
  ["sorry I don't have any transit apps"],
  ["omg I love my dress so much", "it looked so cute!"]
]

bills.each do |bill|
  comment = comments_info.shift
  unless comment.empty?
    Comment.create!({
      body: comment[0],
      user_id: bill.user_owe_id,
      bill_id: bill.id
    })
  end
  if comment.length == 2
    Comment.create!({
      body: comment[1],
      user_id: bill.user_pay_id,
      bill_id: bill.id
    })
  end
end
