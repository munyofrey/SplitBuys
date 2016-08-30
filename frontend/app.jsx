import React from 'react';
import HeaderContainer from './components/header_container';
import GuestContianer from './components/guest_component_container';
import { login } from './util/api_session_util';




const App = ({ children }) => (
  <div>
    <header className='header'>
      <h1 className='title'>SplitBys</h1>
      <HeaderContainer />
    </header>
    <div>
      <GuestContianer />
    </div>
    {children}
  </ div>
)

export default App;
