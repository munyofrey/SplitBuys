import { userConstants, receiveAllUsers } from '../actions/user_actions'
import { fetchUsers } from '../util/api_users_util';


const UsersMiddleware = ({getstate, dispatch}) => next => action => {
  let successCB;
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    console.log(errors);
  };
  switch (action.type) {
    case userConstants.REQUEST_USERS:
      successCB = users => { dispatch(receiveAllUsers(users)) }
      fetchUsers(action.users, successCB, errorCB)
      return next(action)
      break;
    default: return next(action)

  }
}

export default UsersMiddleware;
