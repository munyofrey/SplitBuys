# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signup`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `login`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logout`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
* `fetchCurrentUser` - a little unclear about this one, reading for BnB makes it sound like I don't need it
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.


## Error Cycles
currently my samply state stores errors in the corresponding components - but I think I like this implementation better.

### Error API Response Actions
* `recieveErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Bills Cycles

### Bills API Request Actions

* `fetchAllBills`
  0. invoked from `AllBillsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/bills` is called.
  0. `receiveAllBills` is set as the success callback.
  
* `fetchAllSummedBills`
  0. invoked from `TotalBillsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/all` is called.
  0. `receiveAllBills` is set as the success callback.

* `createBill`
  0. invoked from new bill button `onClick`
  0. `POST /api/bills` is called.
  0. `receiveSingleBill` is set as the success callback.

* `fetchSingleBill`
  0. invoked from `BillDetail` `didMount`/`willReceiveProps`
  0. `GET /api/bills/:id` is called.
  0. `receiveSingleBill` is set as the success callback.

* `updateBill`
  0. invoked from `BillForm` `onSubmit`
  0. `POST /api/bills` is called.
  0. `receiveSingleBill` is set as the success callback.

* `destroyBill`
  0. invoked from delete bill button `onClick`
  0. `DELETE /api/bills/:id` is called.
  0. `removeBill` is set as the success callback.
  
* `fetchFriendsHistory`
  0. invoked from `FriendsBillIndex` `didMount`/`willReceiveProps`
  0. `GET /api/friends/:id` is called.
  0. `receiveAllBills` is set as the success callback.

### Bills API Response Actions

* `receiveAllBills`
  0. invoked from an API callback
  0. the `BillReducer` updates `bills` in the application's state.

* `receiveSingleBill`
  0. invoked from an API callback
  0. the `BillReducer` updates `bills[id]` in the application's state.

* `removeBill`
  0. invoked from an API callback
  0. the `BillReducer` removes `bills[id]` from the application's state.

##Friend Cycles

### Friends API Request Actions

* `fetchAllFriends`
  0. invoked from `FriendsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/friends` is called.
  0. `receiveAllFriends` is set as the success callback.


* `createFriend`
  0. invoked from `accept request` button `onClick`
  0. `POST /api/friends` is called.
  0. `receiveSingleFriend` is set as the success callback.
  0. `deleteRequest` is set as the success callback.

* `fetchSingleFriend`
  0. invoked from `FriendDetail` `didMount`/`willReceiveProps`
  0. `GET /api/friends/:id` is called.
  0. `receiveSingleFriend` is set as the success callback.


### Friends API Response Actions

* `receiveAllFriends`
  0. invoked from an API callback
  0. the `FriendReducer` updates `friends` in the application's state.

* `receiveSingleFriend`
  0. invoked from an API callback
  0. the `FriendReducer` updates `friends[id]` in the application's state.

## Request Cycles

### Request API Request Actions
* `fetchRequests`
  0. invoked from `RequestIndex` `didMount`/`willReceiveProps`
  0. `GET /api/requests` is called.
  0. `receiveAllRequests` is set as the success callback.

* `createRequest`
  0. invoked from `Find Request` button `onClick`
  0. `POST /api/requests` is called.
  0. `receiveSingleRequest` is set as the success callback.

* `deleteRequest`
  0. invoked from `RequestDetail` `Delete Request` or `createFriend` API success calback
  0. `DELETE /api/requests/:id` is called.
  0. `removeRequest` is set as the success callback.

### Requests API Response Actions

 * `receiveAllRequests`
   0. invoked from an API callback
   0. the `RequestReducer` updates `requests` in the application's state.

 * `receiveSingleRequest`
   0. invoked from an API callback
   0. the `RequestReducer` updates adds `request` to `requests` in the application's state.

 * `removeRequest`
  0. invoked from an API callback
  0. the `RequestReducer` updates deletes `request` from `requests` in the application's state.


##Comment Cycles

### Comments Cycles
  * `fetchAllComments`
    0. invoked from `BillsIndexItem` `onClick`
    0. `GET /api/bills/:id/comments` is called.
    0. `receiveAllComments` is set as the success callback.

  * `createComment`
    0. invoked from new comment button `onClick`
    0. `POST /api/bills/:id/comments` is called.
    0. `receiveSingleComment` is set as the success callback.

  * `updateComment`
    0. invoked from `CommentForm` `onSubmit`
    0. `POST /api/bills/:id/comment/:id` is called.
    0. `receiveSingleComment` is set as the success callback.

  * `destroyComment`
    0. invoked from delete bill button `onClick`
    0. `DELETE /api/bills/:id/comments/:id` is called.
    0. `removeComment` is set as the success callback.

### Comments API Response Actions

  * `receiveAllComments`
    0. invoked from an API callback
    0. the `CommentReducer` updates `comments` in the application's state.

  * `receiveSingleComment`
    0. invoked from an API callback
    0. the `CommentReducer` updates `comments` in the application's state.

  * `removeComment`
    0. invoked from an API callback
    0. the `CommentReducer` removes `comment` from `comments` in the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `FriendSearch` or `FriendBillSearch` `onChange` when there is text
  0. `GET /api/users` is called with `email` or `email` and `name` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `FriendSearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
