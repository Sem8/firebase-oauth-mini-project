import React, { Component } from 'react'
import { Switch, Redirect, Route, NavLink } from 'react-router-dom';
import { auth } from './firebase';

import SignIn from './components/SingIn';
import SignUP from './components/SignUp';

import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import './App.css';

class App extends Component {

  logout = () => {
    auth.signOut();
    localStorage.clear('token');
  }

  render() {
    return (
      <div>
        <NavLink to='/login'>Login</NavLink>
        <button type='button' onClick={this.logout}>LogOut</button>
        <Switch>
          <Route path='/' exact component={SignUP} />
          <Route path='/login' exact component={SignIn} />
          <Redirect to='/' />
        </Switch>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAuthUser: (user) => dispatch(actions.authorizeUser(user))
})

// export default App
export default connect(null, mapDispatchToProps)(App);

