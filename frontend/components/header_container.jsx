import React from 'react';
import { connect } from 'react-redux';
import Header from './header_component';
import { logout, receiveErrors } from '../actions/session_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(receiveErrors([])),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
