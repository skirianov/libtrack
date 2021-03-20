import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalComponent from '../modal/Modal';
import { modalAction } from '../modal/modalReducer';
import SearchBar from '../search-bar/SearchBar';

const Home = () => {
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.modal);

  const showModal = (event) => {
    dispatch(modalAction(!modalStatus));
  };

  return (
    <div>
      <SearchBar showModal={showModal} />
      <ModalComponent
        component="book-adding"
        modalStatus={modalStatus}
        showModal={showModal}
        setStatus={setStatus}
      />
    </div>
  );
};

export default Home;
