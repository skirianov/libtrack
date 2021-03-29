import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookList from '../books-list/booksList';
import ModalComponent from '../modal/Modal';
import { modalAction } from '../modal/modalReducer';
import SearchBar from '../search-bar/SearchBar';

import booksService from '../books-list/booksServices';
import { booksAction } from '../books-list/booksReducer';

const Home = () => {
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.modal);
  const user = useSelector((state) => state.user);

  const showModal = (event) => {
    dispatch(modalAction(!modalStatus));
  };

  useEffect(() => {
    booksService
      .getUserBooks(user)
      .then(
        (receivedBooks) => {
          dispatch(booksAction(receivedBooks));
        },
      );
  }, []);

  const books = useSelector((state) => state.books);

  return (
    <div>
      <SearchBar showModal={showModal} />
      <ModalComponent
        component="book-adding"
        modalStatus={modalStatus}
        showModal={showModal}
        setStatus={setStatus}
      />
      <BookList books={books} />
    </div>
  );
};

export default Home;
