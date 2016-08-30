## Component Heirarchy

**SingupFormContainer**
 - SignupForm

**LoginFormContainer**
 - LoginForm
 - since logging in requires different fields than signing up I made two different options

**AppContainer**
 - Header
 - Sidebar

**FriendsContainer**
 - FriendsIndex
 - FriendSearch

**TotalBillsContainer**
 - TotalBillsIndex
 - NewBillButton (gives NewBillForm)

 **TotalBillsIndex**
  - TotalBillsItem

**TotalBillsItem**
  - these are totals of debt/loan amounts for each friends
  - link to FriendBillsContainer on click

**FriendBillsContainer**
 - BillsIndex
 - NewBillButton (gives NewBillForm)

**FriendBillsIndex**
 - NewBillButton (gives NewBillForm)
 - BillsIndex

 **RecentBillsContainer**
  - (optional)
  - NewBillButton (gives NewBillForm)
  - BillsIndex

**AllBillsContainer**
 - NewBillButton (gives NewBillForm)
 - BillsIndex

**BillsIndex**
 - BillIndexItem
  + BillDetail
  + CommentsIndex
    * CommentIndexItem
    * AddComment

**BillIndexItem**
 - CommentIndex
 - DeleteBillButton
 - EditBillButton

**NewBillForm**
 - FriendBillSearch
 - Splitter
   + EqualSplit
   + SharesSplit
   + AllOne Split
   + ExactAmountsSplit

**CommentsIndex**
  - CommentsIndexItem
  - AddComment

**RequestIndex**
 - AcceptButton
 - DeleteButton

**Search**

**FriendSearch**
 + AutoSearch
 * AutoSearchResults

**FriendBillSearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/balances" | "TotalBillsContainer" |
| "/friends/:id" | "FriendsBillsContainer" |
| "/activity" | "RecentBillsContainer" |
| "/expenses" | "AllBillsContainer" |
