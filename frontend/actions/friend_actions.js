export const friendActions = {
  RECEIVE_FRIENDS: 'RECEIVE_FRIENDS',
  REQUEST_FRIENDS: 'REQUEST_FRIENDS',
  CREATE_FRIEND: 'CREATE_FRIEND',
  REQUEST_HISTORY: 'REQUEST_HISTORY',
  DELETE_FRIEND: 'DELETE_FRIEND'
}

export const receiveFriends = (friends) => ({
  type: friendActions.RECEIVE_FRIENDS,
  friends,
})

export const createFriend = (friend) => ({
  type: friendActions.CREATE_FRIEND,
  friend,
})

export const requestFriends = () => ({
  type: friendActions.REQUEST_FRIENDS
})


export const requestFriendHistory = (friend_id) => ({
  type: friendActions.REQUEST_HISTORY,
  friend_id
})

export const deleteFriend = (friend_id) => ({
  type: friendActions.DELETE_FRIEND,
  friend_id
})
