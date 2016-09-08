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
    if (this.props.path.length > 1){return <div></div>}else{    
      return(
        <div className='splash-holder'>
          <div className='header-block-fix'/>
          <div className='splash-holder-center'>
            <div className='tagline-holder'>
              <p className='tagline'>Whether it be a trip to San Francisco or your electricity bill splitting bills with friends just got easier</p>
            </div>

            {this.props.loggedin ? '' :<div onClick={this.loginuser} className='guest-login button'>Guest login</div>}
          </div>
          <div className='entry-image-holder'></div>
        </div>
      )
    }
  }

}



export default GuestComponent;
