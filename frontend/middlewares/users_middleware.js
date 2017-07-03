import { userConstants, receiveUsers } from '../actions/user_actions'
import { fetchUsers } from '../util/api_users_util';


const UsersMiddleware = ({getstate, dispatch}) => next => action => {
  let successCB;
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
  };
  switch (action.type) {
    case userConstants.REQUEST_USERS:
      successCB = users => { dispatch(receiveUsers(users)) }
      fetchUsers(action.users, successCB, errorCB)
      return next(action)
      break;
    default: return next(action)

  }
}

export default UsersMiddleware;
