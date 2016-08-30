import { connect } from 'react-redux';
import GuestComponent from './guest_component';
import { login } from '../actions/session_actions';

const mapStateToProps = state => ({
  loggedin: (state.session.currentUser) ? true : false
})

const mapDispatchToProps = (dispatch, ownProps) => ({
      login: user => dispatch(login(user))
  })


export default connect(mapStateToProps, mapDispatchToProps)(GuestComponent)
