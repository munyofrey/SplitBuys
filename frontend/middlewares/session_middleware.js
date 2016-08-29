import { sessionConstants, receiveCurrentUser, receiveErrors } from '../actions/session_actions'
import { signup, login, logout } from '../util/api_session_util';



const SessionMiddleware = ({getstate, dispatch}) => next => action => {
  const successCB = user => dispatch(receiveCurrentUser(user))
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };;
  switch (action.type) {
    case sessionConstants.LOGIN:
      login(action.user, successCB, errorCB);
      return next(action)
      break;
    case sessionConstants.LOGOUT:
      logout(()=> next(action));
      break;
    case sessionConstants.SIGNUP:
      signup(action.user, successCB, errorCB);
      next(action)
      break;
    default: next(action)

  }
}



export default SessionMiddleware;
