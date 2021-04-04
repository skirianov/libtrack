/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import './App.sass';

import HomePage from './components/Homepage/homepage';
import Main from './components/Main/Main';
import { loggedInUserAction } from './components/Login/loggedInUserReducer';

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
        <Main size={size} />
      </Route>
      <Route
        path="/"
        exact
      >
        <HomePage size={size} />
      </Route>
    </Switch>
  );
};

export default App;
