import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import {signup, login, logout} from './actions/session_actions';
import Root from './root'


document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    console.log(window.currentUser);
    const initialState = {session: {currentUser: window.currentUser, errors:[]}};
    store = configureStore(initialState);
    console.log(store.getState());
  } else {
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
})
