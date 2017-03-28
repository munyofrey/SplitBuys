import React from 'react';
import { Link } from 'react-router';
import BillFormContainer from './bills/new_bill_container';
import Signout from 'react-icons/lib/fa/sign-out';
import SignIn from 'react-icons/lib/fa/sign-in';
import SignUp from 'react-icons/lib/fa/plus-square';


  const loggedOutOptions = () =>(
    <ul className='welcome-user after'>
      <li ><Link to='/login' className='login button' ><SignIn /></Link>
      </li>
      <li ><Link to='/signup' className='signup button'><SignUp /></Link></li>
    </ul>
)

  const loggedinOptions = (currentUser, logout) =>(
    <ul className='welcome-user after'>
      <li className='username-welcome center-flex'><Link to='/landing'> Welcome {currentUser.name}</Link></li>
      <li ><BillFormContainer className='new-bill button'/></li>
      <li ><Link to='/logout' className='new-bill button' onClick={logout}><Signout /></Link></li>
    </ul>
  )

  const Header =  ({currentUser, logout}) =>(
    <header className='header'>
      <div className="header-holder">
        <Link to="/" className='title'>SplitBys</Link>
       { (currentUser) ? loggedinOptions(currentUser, logout) : loggedOutOptions()}
     </div>
     </header>)


export default Header;
