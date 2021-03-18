import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.sass';

import MainPage from './components/mainPage/mainPage';
import Home from './components/home/Home';

const loggedIn = window.localStorage.getItem('userLoggedIn')
|| window.sessionStorage.getItem('sessionUser');

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/main">
          <Home />
        </Route>
        <Route path="/">
          {loggedIn ? <Redirect to="/main" /> : <MainPage />}
        </Route>
      </Switch>
    );
  }
}

export default App;
