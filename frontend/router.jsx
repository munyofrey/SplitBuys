import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Root from './root';
import App from './app';
import HeaderContainer from './components/header_container';
import SignupContainer from './components/signup_component_container';

class AppRouter  extends React.Component{

  constructor(props){
    super(props)
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this)
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this)
  }


  _redirectIfLoggedIn(nextState, replace) {
    const currentState = this.context.store.getState();
     const currentUser = currentState.session.currentUser;
     if (currentUser) {
       replace('/login');
     }
   }

   _ensureLoggedIn(nextState, replace) {
     const currentState = this.context.store.getState();
      const currentUser = currentState.session.currentUser;
      if (!currentUser) {
        replace('/login');
      }
    }

  render(){ return (
    <Router history={ hashHistory }>
      <Route path='signup' component={SignupContainer} onEnter={this._redirectIfLoggedIn}/>
      <Route path='/' component={App}>
        <Route path='login' component={SignupContainer} onEnter={this._redirectIfLoggedIn}/>
        <Route path='logout'/>
      </ Route>
    </ Router>
  )}

}



AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};
export default AppRouter;
