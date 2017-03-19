export const userConstants = {
  RECEIVE_ALL_USERS: 'RECEIVE_ALL_USERS',
  REQUEST_ALL_USERS: 'REQUEST_ALL_USERS'
}


export const receiveUsers = users => ({
  type: userConstants.RECEIVE_USERS,
  users
})

export const requestUsers = (users) => ({
  type: userConstants.REQUEST_USERS,
  users
})
