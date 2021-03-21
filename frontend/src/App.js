import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import './App.sass';

import MainPage from './components/mainPage/mainPage';
import Home from './components/home/Home';
import { loggedInUserAction } from './components/login-box/loggedInUserReducer';

const loggedIn = window.localStorage.getItem('userLoggedIn')
|| window.sessionStorage.getItem('sessionUser');

const App = () => {
  const user = JSON.parse(loggedIn);
  const dispatch = useDispatch();

  dispatch(loggedInUserAction(user));
  return (
    <Switch>
      <Route path="/main">
        <Home />
      </Route>
      <Route path="/">
        {loggedIn ? <Home /> : <MainPage />}
      </Route>
    </Switch>
  );
};

export default App;
