import React from 'react';
import { Dialog, DialogContent, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Login from '../Login/Login';
import Register from '../register-box/Register';
import Registered from '../register-box/Registered';
import BookAddition from '../books/book-addition/bookAddition';
import SearchField from '../navBar/searchField/searchField';

const ModalComponent = ({
  showModal,
  size,
}) => {
  const modalState = useSelector((state) => state.modal);
  const isMobile = size < 720;
  const ModalView = () => {
    switch (modalState) {
      case 'login':
        return <Login device={mobileDevice} />;
      case 'register':
        return (
          <Register
            device={mobileDevice}
          />
        );
      case 'registered':
        return <Registered />;
      case 'book-adding':
        return <BookAddition isMobile={isMobile} />;
      case 'mobile-search':
        return <SearchField showModal={showModal} device={isMobile} />;
      default:
        return null;
    }
  };

  const mobileDevice = isMobile ? 'mobile' : null;

  return (
    <Dialog
      open={!!modalState}
      onClose={() => showModal('CLOSE_MODAL', '')}
      fullWidth={isMobile}
      fullScreen={isMobile}
      style={{ backgroundColor: 'transparent' }}
    >
      <DialogContent className={null}>
        <ModalView />
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
