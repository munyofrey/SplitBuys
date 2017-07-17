# Splitbys

[Live site][heroku]

[heroku]:http://splitbys.herokuapp.com

Splitbys is a full-stack inspired by Splitwise. It relies on Ruby on Rails for the backend, PostgreSQL for the database, and React.js with a Redux framework for the frontend. Splitbys is a single-page application, all content is rendered on one static page.

## Features and Implementation

### Friends

Splitbys allows users to search by first name of people they may know, and to search their friends for people to create bills with. In the case of the new friend user search a call to `UsersController#index` is made on each key press fetching a list of users who match the current search parameters. When a user tries to add another user as a friend a request is sent to the other user which they can approve or delete.


The `FriendStore` stores three types of friend relationships - pending requests from the current user, requests to the current user and friends. The database holds three pertinent pieces of information `user_one_id`, `user_two_id` and the boolean `pending`. When a user requests a friend or approves a request a api call is made to `FriendsController#create`.


 A user can only create bills with friends for whom `pending` is false. When a client wants to create a bill they are prompted to type in the friend's name. When the client find the friend they would like to create a bill with they can click on their name, prompting the `NewBillForm` to pop up, bills can also be created with friends by going directly to their friend's bill history page.

### Bills

Bills can be created, viewed, edited and deleted. In the database the following columns are stored `user_owe_id`, `user_pay_id`, `date`, `total`, `owed`, `description` and `note`. On the frontend Bills are kept in the store in an object with a key of their id for a fast lookup time. Upon logging into the app  an api call is made to the `BillsController#index` to receive all bills a user shares. Bills update in the store when a user creates, updates or deletes a bill or when they navigate to a friends history page at which point an api call to `FriendsController#show`.

```ruby
def show
  @bills = current_user.all_bills_for_friend(params[:id])
  render 'api/bills/index'
end
```

`User#all_bills_for_friend` makes one database query to return all bills between two friends. The controller than passes those bills to the jbuilder view where they are parsed into objects before being sent to the frontend to update the store.

```ruby
def all_bills_for_friend(friend_id)
  self.owed_bills
    .where(user_pay_id: friend_id)
    .includes("comments") + self.paid_bills
    .where(user_owe_id: friend_id)
    .includes("comments")
end
```

### Comments

Bills can be commented on by either the borrower or payer. Comments are stored nested under individual bills in an object. When a comment is created or deleted the store is updated but all other bill information is not refetched.

### Totals

Splitbys gives clients a running tally of money owed to them and by them between friends. When a client navigates to the totals page a call to `SumsController#index` is made and the `SumsStore` is updated.

```ruby
class Api::SumsController < ApplicationController

  def index
    @totals = current_user.sums
    render json: @totals
  end

end
```

Here `User#sums` makes a SQL query and returns a hash mapping friend id's to the total of all their bills with the current user.

```ruby
  # app/models/user.rb
  def sums
    bought = Bill.where(user_pay_id: self.id,               user_owe_id:self.friend_items.pluck(:user_two_id))
                 .group(:user_owe_id).sum(:owed)
    owed = Bill.where(user_owe_id: self.id, user_pay_id:    self.friend_items.pluck(:user_two_id))
               .group(:user_pay_id).sum(:owed)
    bought.merge(owed){|key, paid, owed| (paid - owed).round(2) }
  end
```
On the frontend sums are displayed in different columns depending on if the user is in debt with a friend or can collect. Each total item links to the corresponding friend, allowing an easy way to review transaction history between friends.
