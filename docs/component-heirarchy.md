## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**AppContainer**
 - Header
 - Sidebar

**FriendsContainer**
 - FriendsIndex
 - FriendSearch

**TotalBillsContainer**
 - TotalBillsIndex
 - NewBill

 **TotalBillsIndex**
  - TotalBillsItem

**TotalBillsItem**
  - these are totals of debt/loan amounts for each friends
  - link to FriendBillsContainer on click

**FriendBillsContainer**
 - BillsIndex
 - NewBill

**FriendBillsIndex**
 - NewBill
 - BillsIndex

 **RecentBillsContainer**
  - (optional)
  - NewBill
  - BillsIndex

**AllBillsContainer**
 - NewBill
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

**NewBill**
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
