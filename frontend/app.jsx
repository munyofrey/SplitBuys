import React from 'react';
import HeaderContainer from './components/header_container';
import GuestContianer from './components/guest_component_container';
import { login } from './util/api_session_util';




const App = ({ children, location }) => (
  <div style={{height:'100%'}}>
      <HeaderContainer />
      <GuestContianer path={location.pathname}/>
    {children}
  </ div>
)

export default App;
