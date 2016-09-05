import { friendActions, receiveFriends } from '../actions/friend_actions';
import { fetchFriends, createFriend } from '../util/api_friends_util';

const FriendsMiddleware = ({getState, dispatch}) => next => action => {
  const errorCB = errors => console.log(errors);
  const successCB = friends => dispatch(receiveFriends(friends));
  switch (action.type) {
    case friendActions.REQUEST_FRIENDS:
      fetchFriends(successCB, receiveFriends);
      return next(action)
      break;
    case friendActions.CREATE_FRIEND:
      createFriend(action.friend, successCB, errorCB)
      return next(action)
    default: return next(action)

  }
}

export default FriendsMiddleware;
