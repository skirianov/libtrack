import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import modalReducer from './components/modal/modalReducer';
import loggedInUserReducer from './components/login-box/loggedInUserReducer';

const reducer = combineReducers({
  modal: modalReducer,
  user: loggedInUserReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
