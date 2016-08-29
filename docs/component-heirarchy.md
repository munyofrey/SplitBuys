## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**AppContainer**
 - Header
 - Sidebar

**FriendsContainer**
 - FriendsIndex
 - FriendSearch

**BillsContainer**
 - balances
  + BillsIndex
    * FriendBillsIndex
    * RecentBillsIndex
    * AllBillsIndex
  + NewBill

**FriendBillsIndex**
 - NewBill

**AllBillsIndex**
 - NewBill

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
| "/balances" | "BillsContainer" |
| "/friends/:id" | "FriendsBillsIndex" |
| "/activity" | "NotebookContainer" |
| "/expenses" | "TagContainer" |
