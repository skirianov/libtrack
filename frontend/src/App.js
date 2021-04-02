/* eslint-disable no-nested-ternary */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import './App.sass';

import MainPage from './components/mainPage/mainPage';
import Home from './components/home/Home';
import { loggedInUserAction } from './components/login-box/loggedInUserReducer';

const loggedIn = window.localStorage.getItem('userLoggedIn')
|| window.sessionStorage.getItem('sessionUser');

const App = () => {
  const user = JSON.parse(loggedIn);
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({
    minDeviceWidth: 1024,
  });
  const isMobile = useMediaQuery({
    maxWidth: 600,
  });

  const device = isDesktop ? 'desktop' : 'mobile';

  dispatch(loggedInUserAction(user));
  return (
    <Switch>
      <Route path="/main">
        <Home device={device} />
      </Route>
      <Route
        path="/"
        exact
        component={loggedIn ? Home : MainPage}
      />
    </Switch>
  );
};

export default App;
