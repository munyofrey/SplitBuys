import { connect } from 'react-redux';
import { createFriend, requestFriends } from '../../actions/friend_actions';
import { requestAllUsers } from '../../actions/user_actions';
import FriendComponent from './friends_component';

const mapStateToProps = state => ({
  friends: state.friends
})

const mapDispatchToProps = dispatch => ({
  createFriend: (friend) => dispatch(createFriend(friend)),
  requestFriends: () => dispatch(requestFriends()),
  requestAllUsers: () => dispatch(requestAllUsers())
})


export default connect(mapStateToProps, mapDispatchToProps)(FriendComponent)
