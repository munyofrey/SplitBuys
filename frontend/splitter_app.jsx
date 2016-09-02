import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './root';
import {requestAllUsers} from './actions/user_actions';
import Modal from 'react-modal';

window.requestAllUsers = () => window.store.dispatch(requestAllUsers())

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const initialState = {
      session: {currentUser: window.currentUser, errors:[]}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  window.store = store;
  Modal.setAppElement(root)
  ReactDOM.render(<Root store={store}/>, root);
})
