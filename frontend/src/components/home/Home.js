import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookList from '../books-list/booksList';
import ModalComponent from '../modal/Modal';
import { modalAction } from '../modal/modalReducer';
import NavBar from '../navBar/NavBar';
import booksService from '../books-list/booksServices';
import { booksAction } from '../books-list/booksReducer';

const Home = ({ size }) => {
  const [books, setBooks] = useState([]);
  const booksFromState = useSelector((state) => state.books);
  const showSearch = useSelector((state) => state.search);
  const modalStatus = useSelector((state) => state.modal);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const showModal = (type, text) => {
    dispatch(modalAction(type, text));
  };

  useEffect(() => {
    booksService
      .getUserBooks(user)
      .then(
        (receivedBooks) => {
          dispatch(booksAction(receivedBooks));
        },
      );
  }, [user, dispatch]);

  useEffect(() => {
    setBooks(booksFromState);
  }, [booksFromState]);

  return (
    <div>
      <NavBar showModal={showModal} size={size} />
      <BookList books={books} size={size} />
      {showSearch === true ? (
        <ModalComponent
          size={size}
          showModal={showModal}
        />
      ) : (
        <ModalComponent
          size={size}
          showModal={showModal}
        />
      ) }
    </div>
  );
};

export default Home;
