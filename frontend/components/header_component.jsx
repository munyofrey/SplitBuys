import React from 'react';
import { Link } from 'react-router';
import BillFormContainer from './bills/new_bill_container'


  const loggedOutOptions = () =>(
    <ul className='welcome-user after'>
      <li className='center-flex'><Link to='login' className='login button' >Login</Link>
      </li>
      <li className='center-flex'><Link to='signup' className='signup button'>Sign Up</Link></li>
    </ul>
)

  const loggedinOptions = (currentUser, logout) =>(
    <ul className='welcome-user after'>
      <li className='username-welcome center-flex'><Link to='/landing'> Welcome {currentUser.name}</Link></li>
      <li className='center-flex'><BillFormContainer className='new-bill button'/></li>
      <li className='center-flex'><Link to='logout' className='logout button' onClick={logout}>Logout</Link></li>
    </ul>
  )

  const Header =  ({currentUser, logout}) =>(
    <header className='header'>
      <div className='header-holder'>
        <Link to="/" className='title'>SplitBys</Link>
       { (currentUser) ? loggedinOptions(currentUser, logout) :loggedOutOptions()}
  </div>
</header>
  )


export default Header;
