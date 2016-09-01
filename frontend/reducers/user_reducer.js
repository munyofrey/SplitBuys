import { userConstants } from '../actions/user_actions';
import { merge } from 'lodash';

const preloadedState = [];

const userReducer = (oldState = preloadedState, action) => {
  switch (action.type) {
    case userConstants.RECEIVE_ALL_USERS:
      return action.users
      break;
    default: return oldState
  }
}

export default userReducer;
