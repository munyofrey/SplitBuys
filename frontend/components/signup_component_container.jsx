import {connect} from 'react-redux';
import SignupForm from './signup_component';
import { login, logout, signup } from '../actions/session_actions';


const mapStateToProps = state => ({
  loggedin: Boolean(state.session.currentUser),
  errors: state.session.errors,
})

  const mapDispatchToProps = (dispatch, ownProps) => {
    const formType=ownProps.location.pathname.slice(1);
    const loginType = (formType==='login') ? true : false
    return({
      signup: user => dispatch(signup(user)),
      login: user => dispatch(login(user)),
      formType,
      loginType
  })}


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
