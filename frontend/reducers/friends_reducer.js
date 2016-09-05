import { friendActions } from '../actions/friend_actions';
import { merge } from 'lodash';

const preloadedState = [[],[],[]]

const FriendsReducer = (oldState = preloadedState, action) => {
  switch (action.type) {
    case friendActions.RECEIVE_FRIENDS:
      return action.friends
      break;
    default: return oldState

  }
}

export default FriendsReducer;
