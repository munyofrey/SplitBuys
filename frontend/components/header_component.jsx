import React from 'react';
import { Link } from 'react-router';
import SignupComponentContainer from './signup_component_container';


  const loggedOutOptions = () =>(
    <div>

    <div className='welcome-user after'>
      <div className="button login" onClick={toggleLogin}>Sign In </div>
      <div className="button signup" onClick={toggleSignup}>Sign Up</div>
    </div>
    <div className='hidden dropdown signup'>
        <SignupComponentContainer formType='signup' /></div>
        <div className='hidden dropdown login'>
        <SignupComponentContainer formType='login' /></div>
      </div>
)

  const toggleDropdown = () => {
    $('.dropdown').toggleClass('hidden')
    $('.username-welcome').toggleClass('white')
  }

  const toggleLogin = () => {
    $('.dropdown.login').toggleClass('hidden')
    $('.button.login').toggleClass('brightness')
    const signup = $('.dropdown.signup');
    if (!signup.hasClass('hidden')){
      signup.addClass('hidden')
    }
    const signupButton = $('.button.signup');
    if (signupButton.hasClass('brightness')){
      signupButton.removeClass('brightness')
    }
  }

  const toggleSignup = () => {
    $('.dropdown.signup').toggleClass('hidden')
    $('.button.signup').toggleClass('brightness')
    const login = $('.dropdown.login');
    if (!login.hasClass('hidden')){
      login.addClass('hidden')
    }
    const loginButton = $('.button.login');
    if (loginButton.hasClass('brightness')){
      loginButton.removeClass('brightness')
    }
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
