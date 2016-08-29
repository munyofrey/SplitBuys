import { sessionConstants, receiveCurrentUser, recieveErrors } from '../actions/session_actions'
import { signup, login, logout } from '../util/api_session_util'


LOGIN
LOGOUT
SIGNUP

const SessionMiddleware = ({getstate, dispatch}) => next => action => {
  const successCB = user => dispatch(receiveCurrentUser(user))
  const errorCB; //does somestuff
  let error;
  switch (action.type) {
    case sessionConstants.LOGIN:
      login(action.user, successCB, errorCB);
      return next(action)
    case sessionConstants.LOGOUT:
      logout(()=> next(action));
      break;
    case sessionConstants.SIGNUP:
      signup(action.user, successCB, errorCB);
      next(action)
    default: next(action)

  }
}
