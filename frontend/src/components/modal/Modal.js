import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import image from '/home/sergii/projects/dev/libtrack/frontend/src/images/login-img.png';

import Login from '../login-box/Login';
import Register from '../register-box/Register';
import Registered from '../register-box/Registered';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    margin: 'auto',
    width: '30%',
    height: '70%',
    border: 'none',
    outline: 'none',
  },
  image: {
    width: '100%',
  },
});

const ModalComponent = ({
  modalStatus,
  showModal,
  component,
  setStatus,
}) => {
  const classes = useStyles();
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
    return null;
  };

  return (
    <Modal
      open={modalStatus}
      onClose={showModal}
      className={classes.modal}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modalStatus}>
        <Paper elevation={3}>
          <Container maxWidth="sm">
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '60vh' }}
            >
              <Grid item xs={12} md={12} lg={10} xl={10}>
                <img src={image} alt="main-page" className={classes.image} />
              </Grid>
              <Grid item xs={12} md={12} lg={10} xl={10}>
                <ModalView />
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
