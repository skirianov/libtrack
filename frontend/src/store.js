import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import modalReducer from './components/modal/modalReducer';
import loggedInUserReducer from './components/login-box/loggedInUserReducer';
import bookReducer from './components/book-addition/bookReducer';
import booksReducer from './components/books-list/booksReducer';
import drawerReducer from './components/drawer/drawerReducer';
import searchReducer from './components/navBar/searchReducer';

const reducer = combineReducers({
  modal: modalReducer,
  user: loggedInUserReducer,
  book: bookReducer,
  books: booksReducer,
  drawer: drawerReducer,
  search: searchReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
