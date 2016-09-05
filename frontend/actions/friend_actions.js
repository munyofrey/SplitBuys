export const friendActions = {
  RECEIVE_FRIENDS: 'RECEIVE_FRIENDS',
  REQUEST_FRIENDS: 'REQUEST_FRIENDS',
  CREATE_FRIEND: 'CREATE_FRIEND'
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
