import { connect } from 'react-redux';
import UserSearch from './user_search';
import { requestUsers, receiveUsers } from '../../actions/user_actions';
import { createFriend } from '../../actions/friend_actions';


const mapDispatchToProps = dispatch => ({
  requestUsers: userQuery => dispatch(requestUsers(userQuery)),
  receiveUsers: () => dispatch(receiveUsers([])),
  createFriend: (friend) => dispatch(createFriend(friend))
})

const mapStateToProps = state => ({
  users: state.users,
  currentUser: state.session.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch)
