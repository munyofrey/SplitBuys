import { connect } from 'react-redux';
import UserSearch from './user_search';
import { requestUsers, receiveUsers } from '../../actions/user_actions';


const mapDispatchToProps = dispatch => ({
  requestUsers: userQuery => dispatch(requestUsers(userQuery)),
  receiveUsers: () => dispatch(receiveUsers([]))
})

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch)
