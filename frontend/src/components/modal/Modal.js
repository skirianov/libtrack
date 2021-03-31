import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Dialog, DialogContent } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

import Login from '../login-box/Login';
import Register from '../register-box/Register';
import Registered from '../register-box/Registered';
import BookAddition from '../book-addition/bookAddition';

const ModalComponent = ({
  modalStatus,
  showModal,
  component,
  setStatus,
  className,
}) => {
  const ModalView = () => {
    if (component === 'login') {
      return <Login className={className} device={mobileDevice} />;
    }
    if (component === 'register') {
      return (
        <Register
          setStatus={setStatus}
          device={mobileDevice}
          className={className}
        />
      );
    }
    if (component === 'registered') {
      return <Registered />;
    }
    if (component === 'book-adding') {
      return <BookAddition />;
    }
    return null;
  };

  const isDesktop = useMediaQuery({
    minDeviceWidth: 1024,
  });
  const isTablet = useMediaQuery({
    minWidth: 600,
    maxWidth: 1024,
  });
  const isMobile = useMediaQuery({
    maxWidth: 600,
  });

  const mobileDevice = isMobile ? 'mobile' : null;

  return (
    <Dialog
      open={modalStatus}
      onClose={showModal}
      fullWidth={!!isMobile}
      fullScreen={!!isMobile}
      style={{ backgroundColor: 'transparent' }}
    >
      <DialogContent style={{ padding: 0 }}>
        <Paper elevation={5}>
          <ModalView />
        </Paper>
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
