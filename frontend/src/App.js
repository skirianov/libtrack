import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.sass';

import MainPage from './components/mainPage/mainPage';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}

export default App;
