sessionConstants = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGNUP: 'SIGNUP',
  RECEIVE_CURRENT_USER: 'RECEIVE_CURRENT_USER',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
};


const login = user => ({
  type: sessionConstants.LOGIN,
  user
})

const signup = user => ({
  type: sessionConstants.SIGNUP,
  user
})

const logout = () => ({
  type: sessionConstants.LOGOUT
})

const receiveCurrentUser = user => ({
  type: sessionConstants.RECEIVE_CURRENT_USER,
  user
})

const recieveErrors = errors => ({
  type: sessionConstants.RECEIVE_ERRORS,
  errors
})
