import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './root';
import {requestSums} from './actions/sums_actions';
import Modal from 'react-modal';
import { requestFriends, createFriend } from './actions/friend_actions';



window.createFriend = (friend) =>window.store.dispatch(createFriend(friend))
window.requestFriends = () =>window.store.dispatch(requestFriends())

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
