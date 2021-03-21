import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import modalReducer from './components/modal/modalReducer';
import loggedInUserReducer from './components/login-box/loggedInUserReducer';
import bookReducer from './components/book-addition/bookReducer';

const reducer = combineReducers({
  modal: modalReducer,
  user: loggedInUserReducer,
  book: bookReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
