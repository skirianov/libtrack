/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useLayoutEffect } from 'react';
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

  const [size, setSize] = useState(0);
  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
  }, [size]);

  useEffect(() => {
    dispatch(loggedInUserAction(user));
  }, [user, dispatch]);
  return (
    <Switch>
      <Route path="/main">
        <Home size={size} />
      </Route>
      <Route
        path="/"
        exact
      >
        <MainPage size={size} />
      </Route>
    </Switch>
  );
};

export default App;
