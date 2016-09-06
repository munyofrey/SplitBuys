import { connect } from 'react-redux';
import { createFriend, requestFriends, deleteFriend } from '../../actions/friend_actions';
import { requestAllUsers } from '../../actions/user_actions';
import FriendComponent from './friends_component';

const mapStateToProps = state => ({
  friends: state.friends,
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
