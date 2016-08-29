import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import {signup, login, logout} from './actions/session_actions';

window.store = configureStore();
window.logout = logout;
window.login = login;

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
  let store = window.store;
  // if (window.currentUser) {
  //   const initialState = {session: {currentUser: window.currentUser}};
  //   store = configureStore(initialState);
  // } else {
  //   store = configureStore();
  // }
  ReactDOM.render(<h1>Hi from App</h1>, root);
})
