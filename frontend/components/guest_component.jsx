import React from 'react';
import {Link} from 'react-router'

class GuestComponent extends React.Component{
  constructor(props){
    super(props)
    this.loginuser = this.loginuser.bind(this)
  }


  loginuser(){
    const user = {user: {email:'guestuser@splitbys.com', password:'password'}};
    this.props.login(user);
  }

  render(currentUser){
    if (this.props.loggedin){return(<div></div>)}
    else{
      return(<div onClick={this.loginuser} className='hvr-float'>Guest login</div>)
    }
  }

}



export default GuestComponent;
