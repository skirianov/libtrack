import React from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import Login from '../login-box/Login';
import Register from '../register-box/Register';
import Registered from '../register-box/Registered';
import BookAddition from '../book-addition/bookAddition';
import SearchField from '../navBar/searchField/searchField';

const ModalComponent = ({
  modalStatus,
  showModal,
  setStatus,
  className,
}) => {
  const ModalView = () => {
    const modalState = useSelector((state) => state.modal);
    switch (modalState) {
      case 'login':
        return <Login device={mobileDevice} />;
      case 'register':
        return (
          <Register
            setStatus={setStatus}
            device={mobileDevice}
          />
        );
      case 'registered':
        return <Registered />;
      case 'book-adding':
        return <BookAddition />;
      case 'mobile-search':
        return <SearchField showModal={showModal} device={isMobile} />;
      default:
        return null;
    }
  };

  const isDesktop = useMediaQuery({
    minDeviceWidth: 1024,
  });
  const isMobile = useMediaQuery({
    maxWidth: 600,
  });

  const mobileDevice = isMobile ? 'mobile' : null;

  return (
    <Dialog
      open={modalStatus}
      onClose={() => showModal('CLOSE_MODAL', '')}
      fullWidth={!!isMobile}
      fullScreen={!!isMobile}
      style={{ backgroundColor: 'transparent' }}
    >
      <DialogContent className={className}>
        <ModalView />
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
