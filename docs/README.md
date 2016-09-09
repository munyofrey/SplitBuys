# SplitBuys

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://splitbys.xyz

## Minimum Viable Product

SplitBuys is a web application inspired by Splitwise built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [X] Hosting on Heroku
- [X] New account creation, login, and guest/demo login
- [X] Bills
- [X] Spliting Bills - MVP is all one person, or even split
- [X] Comments on Bills
- [X] Friending - Bills can only be made with friends
- [X] Transactions History (I have multiple options listed, but ultimately MVP is a simple list of every transaction  and ability to inspect each one)
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [X] New Rails project
- [X] `User` model/migration
- [X] Back end authentication (session/password)
- [X] `StaticPages` controller and root view
- [X] Webpack & react/redux modules
- [X] `APIUtil` to interact with the API
- [X] Redux cycle for frontend authentication
- [X] User signup/signin components
- [X] Blank landing component after signup/signin
- [X] Style signup/signin components
- [X] Seed users
- [X] Review phase 1

### Phase 2: Bill Model, API, and components (3 days)

**Objective:** Bills can be created, read, edited and destroyed through
the API. Have veiws that show totals between users as well as transaction history veiws.

- [X] `Bill` model
- [X] Seed database with a small amount of test data
- [X] CRUD API for notes (`BillsController`)
- [X] JBuilder views for bills
- Bills components and respective Redux loops
  - [X] `BillsListContianer`
  - [X] `BillDetailItem`
  - [X] `NewBillForm`
    - [X] allows four options: you paid all (owed nothing), they paid all(owed nothing), you paid (split half), they paid(split half)
    - [X] Allotting at least two hours to researching how to implement this on a form
- [X] Bills History components and respective Redux loops`
- [X] Style bills components
- [X] Seed notes

### Phase 3: Friending, API, and components (2.5 days)

**Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

- [X] `Friend` model
- [X] Seed database with a small amount of test data
- [X] Can add Friend
- [X] `UserSearch` bar allows requesting friend
- [X] `FriendsComponent` shows up
- [X] Friends Transaction History
- [X] Style `FriendHistoryContainer` Components
- [X] Style `UserSearch` Components
- [X] Style `FriendIndex` Components
- [X] Update Bills so that they can only be created among friends
- [X] Update Bills so that they use `UserSearch` for only friends
- [X] Add and deleting requests
- [X] `RequestIndex` shows up (with buttons to add and delete)
- [X] Style Request Components
- [X] Seed Friends data

### Phase 4: Comments, API, and components (1.5 days)

**Objective:** Bills can be commented

- [X] `Comment` model
- [X] Fetching comments for a bill
- [X] Adding comments to a bill
- [X] Can add/delete comments you wrote
- [X] Seed bills with seed comment data

### Phase 5: Cleanup, refactoring (.5 days)
**Objective** Make it DRYer


### Bonus Features (TBD)
**Objective** Make it here.

- [ ] Allow for more splitting options
- [ ] Allow multiple Friends to be on a bill (sort of groups)
- [ ] Fake Checkout/Settling up
