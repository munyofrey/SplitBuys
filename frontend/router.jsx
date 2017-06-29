import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Root from './root';
import App from './app';
import HeaderContainer from './components/header_container';
import GuestComponent from './components/guest_component_container';
import Landing from './components/landing_component';
import Sums from './components/sums/sums_container';
import FriendHistoryContainer from './components/friends/friend_history_container'

class AppRouter  extends React.Component{

  constructor(props){
    super(props)
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this)
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this)
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this)
    this._loginRedirect = this._loginRedirect.bind(this)
  }


  _redirectIfLoggedIn(nextState, replace) {
    const currentState = this.context.store.getState();
     const currentUser = currentState.session.currentUser;
     if (currentUser) {
       replace('/landing');
     }
   }

   _loginRedirect(nextState, replace){
     this._redirectIfLoggedIn(nextState, replace);
     $('login-form').removeClass('hidden')
   }

   _ensureLoggedIn(nextState, replace) {
     const currentState = this.context.store.getState();
      const currentUser = currentState.session.currentUser;
      if (!currentUser) {
        replace('/');
      }
    }




  render(){
    return (
    <Router history={ hashHistory }>
      <Route path='/' component={App}>
        <IndexRoute component={GuestComponent} />
        <Route path='/landing' component={Landing} onEnter={this._ensureLoggedIn} />
        <Route path='/totals' component={Sums} onEnter={this._ensureLoggedIn}/>
        <Route path='/friends/:friend_id'
          component={FriendHistoryContainer}
          onEnter={this._ensureLoggedIn}/>
      </ Route>
    </ Router>
  )}

}



AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
