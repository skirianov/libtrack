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
}) => {
  const ModalView = () => {
    if (component === 'login') {
      return <Login />;
    }
    if (component === 'register') {
      return <Register setStatus={setStatus} />;
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

  return (
    <Dialog
      open={modalStatus}
      onClose={showModal}
      fullWidth={!!isMobile}
      fullScreen={!!isMobile}
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
