import React from 'react';
import ReactDOM from 'react-dom';



document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
  // if (window.currentUser) {
  //   const initialState = {session: {currentUser: window.currentUser}};
  //   store = configureStore(initialState);
  // } else {
  //   store = configureStore();
  // }

  ReactDOM.render(<h1>Hi from App</h1>, root);
})
