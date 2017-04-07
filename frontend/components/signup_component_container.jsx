import { connect } from 'react-redux';
import SignupForm from './signup_component';
import { login, logout, signup, receiveErrors } from '../actions/session_actions';


const mapStateToProps = state => ({
  loggedin: Boolean(state.session.currentUser),
  errors: state.session.errors,
})

  const mapDispatchToProps = (dispatch, ownProps) => ({
      signup: user => dispatch(signup(user)),
      login: user => dispatch(login(user)),
      formType: ownProps.formType,
      loginType: ownProps.formType === 'login'
  })


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
