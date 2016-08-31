import React from 'react';
import { Link } from 'react-router';



  const loggedOutOptions = () =>(
    <ul className='welcome-user after'>
      <li className='center-flex'><Link to='login' className='login button'>Login</Link>
      </li>
      <li className='center-flex'><Link to='signup' className='signup button'>SignUp</Link></li>
    </ul>
)

  const loggedinOptions = (currentUser, logout) =>(
    <ul className='welcome-user after'>
      <li className='username-welcome'> Welcome {currentUser.name}</li>
      <li><button to='logout' className='logout' onClick={logout}>Logout</button></li>
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
