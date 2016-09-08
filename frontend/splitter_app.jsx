import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './root';
import Modal from 'react-modal';



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
  Modal.setAppElement(root)
  ReactDOM.render(<Root store={store}/>, root);
})
