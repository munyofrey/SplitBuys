import React from 'react';
import { Link, hashHistory } from 'react-router'



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
    return(
      <main className="splash-page">
        <div className="bgimg-1">
          <div className="caption">
            <span className="border">SPLITBYS</span>
          </div>
        </div>

        <div className="blurb-1">
          <p id="blurb">Splitting the tab has never been easier</p>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border">FRIEND</span>
          </div>
        </div>

        <div>
          <div className="blurb-2">
            <p id="blurb">Connect with friends and start splitting</p>
          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">
            <span className="border">MANAGE</span>
          </div>
        </div>

        <div>
          <div className="blurb-3">
            <p id="blurb">Keep a running tally with your coworker or your roommate</p>
          </div>
        </div>

        <div className="bgimg-4">
          <div className="caption">
            <span className="border">FOLLOW</span>
          </div>
        </div>

        <div>
          <div className="blurb-4">
            <p id="blurb">Track your expenses</p>
          </div>
        </div>

        <div className="bgimg-5">
          <div className="caption">
             <a className="try-button" href="#">
            <span className="border" onClick={()=>this.loginuser()}>{this.props.loggedin ? "BACK TO YOUR EXPENSES" : "TRY IT NOW"}</span>
            </a>
          </div>
        </div>



      </main>

      )
  }

}



export default GuestComponent;
