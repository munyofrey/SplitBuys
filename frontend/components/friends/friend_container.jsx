import { connect } from 'react-redux';
import { createFriend, requestFriends, deleteFriend } from '../../actions/friend_actions';
import { requestAllUsers } from '../../actions/user_actions';
import FriendComponent from './friends_component';
import {values} from 'lodash';

const mapStateToProps = state => ({
  friends: values(state.friends.friends),
  requested: values(state.friends.requested),
  pending: values(state.friends.pending),
  users: state.users,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  createFriend: (friend) => dispatch(createFriend(friend)),
  requestFriends: () => dispatch(requestFriends()),
  requestAllUsers: () => dispatch(requestAllUsers()),
  deleteFriend: (friend) => dispatch(deleteFriend(friend))
})


export default connect(mapStateToProps, mapDispatchToProps)(FriendComponent)
