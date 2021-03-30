import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import image from '/home/sergii/projects/dev/libtrack/frontend/src/images/login-img.png';

import { Dialog, DialogContent } from '@material-ui/core';

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

  return (
    <Dialog
      open={modalStatus}
      onClose={showModal}
      fullWidth
      fullScreen
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
