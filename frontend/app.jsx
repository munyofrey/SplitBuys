import React from 'react';
import HeaderContainer from './components/header_container';
import AuthContainer from './components/auth_container';

const App = ({ children }) => (
  <div>
    <header>
      <h1 className='title'>SplitBys</h1>
      <HeaderContainer />
    </header>
    <h1> Hello from App </h1>
    {children}
  </ div>
)

export default App;
