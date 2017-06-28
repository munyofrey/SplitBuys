import { friendActions } from '../actions/friend_actions';
import { merge } from 'lodash';

const preloadedState = {
  friends: {},
  requested: {},
  pending: {}
}

const FriendsReducer = (oldState = preloadedState, action) => {
  switch (action.type) {
    case friendActions.RECEIVE_FRIENDS:
      return {
              friends: action.friends[0],
              pending: action.friends[1],
              requested: action.friends[2]
            }
      break;
    case"CLEAR_STATE":
      return preloadedState;
    default: return oldState

  }
}

export default FriendsReducer;
