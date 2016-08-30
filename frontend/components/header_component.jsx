import React from 'react';
import { Link } from 'react-router';


  const loggedOutOptions = () =>(
    <ul>
      <li><Link to='login' className='login button'>Login</Link></li>
      <li><Link to='signup' activeClassName='signup button'>SignUp</Link></li>
    </ul>
)

  const loggedinOptions = (currentUser, logout) =>(
    <ul className='welcome-user'> Welcome {currentUser.name}
      <li><Link to='logout'>Logout</Link></li>
    </ul>
  )

  const Header =  ({currentUser, logout}) =>{
    if (currentUser){
      return(loggedinOptions(currentUser, logout))
    }else{
      return(loggedOutOptions())
    }
  }


export default Header;
