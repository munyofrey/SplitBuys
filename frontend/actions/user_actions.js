export const userConstants = {
  RECEIVE_USERS: 'RECEIVE_USERS',
  REQUEST_USERS: 'REQUEST_USERS'
};


export const receiveUsers = users => ({
  type: userConstants.RECEIVE_USERS,
  users
});

export const requestUsers = (users) => ({
  type: userConstants.REQUEST_USERS,
  users
});
