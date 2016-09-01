export const userConstants = {
  RECEIVE_ALL_USERS: 'RECEIVE_ALL_USERS',
  REQUEST_ALL_USERS: 'REQUEST_ALL_USERS'
}


export const receiveAllUsers = users => ({
  type: userConstants.RECEIVE_ALL_USERS,
  users
})

export const requestAllUsers = () => ({
  type: userConstants.REQUEST_ALL_USERS
})
