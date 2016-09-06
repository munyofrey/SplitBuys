import { friendActions, receiveFriends } from '../actions/friend_actions';
import { receiveBills } from '../actions/bill_actions';
import { fetchFriends, createFriend, fetchFriendHistory } from '../util/api_friends_util';

const FriendsMiddleware = ({getState, dispatch}) => next => action => {
  const errorCB = errors => console.log(errors);
  let successCB = friends => dispatch(receiveFriends(friends));
  switch (action.type) {
    case friendActions.REQUEST_FRIENDS:
      fetchFriends(successCB, receiveFriends);
      return next(action)
      break;
    case friendActions.CREATE_FRIEND:
      createFriend(action.friend, successCB, errorCB)
      return next(action)
    case friendActions.REQUEST_HISTORY:
      successCB = bills => dispatch(recieveBills(bills))
      fetchFriendHistory(action.friend_id, successCB, errorCB)
    default: return next(action)

  }
}

export default FriendsMiddleware;
