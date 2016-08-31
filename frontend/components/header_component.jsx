import React from 'react';
import { Link } from 'react-router';



  const loggedOutOptions = () =>(
    <ul className='welcome-user after'>
      <li className='center-flex'><Link to='login' className='login button' >Login</Link>
      </li>
      <li className='center-flex'><Link to='signup' className='signup button'>Sign Up</Link></li>
    </ul>
)

  const loggedinOptions = (currentUser, logout) =>(
    <ul className='welcome-user after'>
      <li className='username-welcome center-flex'> Welcome {currentUser.name}</li>
      <li className='center-flex'><Link to='logout' className='logout button' onClick={logout}>Logout</Link></li>
    </ul>
  )

  const Header =  ({currentUser, logout}) =>(
    <header className='header'>
      <div className='header-holder'>
        <h1 className='title'>SplitBys</h1>
       { (currentUser) ? loggedinOptions(currentUser, logout) :loggedOutOptions()}
  </div>
</header>
  )


export default Header;
