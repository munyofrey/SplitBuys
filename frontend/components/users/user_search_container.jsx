import { connect } from 'react-redux';
import UserSearch from './user_search';
import { requestAllUsers } from '../../actions/user_actions';


const mapDispatchToProps = dispatch => ({
  requestAllUsers: () => dispatch(requestAllUsers())
})

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch)
