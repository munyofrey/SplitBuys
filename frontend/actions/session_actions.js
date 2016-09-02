export const sessionConstants = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGNUP: 'SIGNUP',
  RECEIVE_CURRENT_USER: 'RECEIVE_CURRENT_USER',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS_SESSION'
};


export const login = user => ({
  type: sessionConstants.LOGIN,
  user
})

export const signup = user => ({
  type: sessionConstants.SIGNUP,
  user
})

export const logout = () => ({
  type: sessionConstants.LOGOUT
})

export const receiveCurrentUser = currentUser => ({
  type: sessionConstants.RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveErrors = errors => ({
  type: sessionConstants.RECEIVE_ERRORS,
  errors
})
