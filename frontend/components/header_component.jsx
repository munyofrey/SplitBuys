import React from 'react';
import { Link } from 'react-router';
import SignIn from 'react-icons/lib/fa/sign-in';
import SignUp from 'react-icons/lib/fa/plus-square';


  const loggedOutOptions = () =>(
    <ul className='welcome-user after'>
      <li >Sign Up</li>
      <li >Sign In</li>
    </ul>
)

  const toggleDropdown = () => {
    $('.dropdown').toggleClass('hidden')
    $('.username-welcome').toggleClass('white')
  }


  const loggedinOptions = (currentUser, logout) =>(
    <div className='right-header'>
    <div className='username-welcome' onClick={toggleDropdown}> Welcome {currentUser.name}
      <b className="caret"></b></div>
    <ul className='dropdown logout-drop hidden after'>
        <li className='logout' onClick={logout}>Sign out</li>
    </ul>
  </div>
  )

  const Header =  ({currentUser, logout}) =>(
    <header className='header'>
      <div className="header-holder">
        <Link to="/" className='title'>SplitBys</Link>
       { (currentUser) ? loggedinOptions(currentUser, logout) : loggedOutOptions()}
     </div>
     </header>)


export default Header;
