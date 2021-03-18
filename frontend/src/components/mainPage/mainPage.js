/* eslint-disable no-undef */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Button from '../button/Button';
import ModalComponent from '../modal/Modal';
import { modalAction } from '../modal/modalReducer';

import home from '/home/sergii/projects/dev/libtrack/frontend/src/images/reading-homepage.svg';

const useStyles = makeStyles({
  root: {
    color: '#6c63ff',
    textAlign: 'center',
  },
  logo: {
    display: 'flex',
    margin: 'auto',
    marginTop: '3%',
  },
  blurred: {
    filter: 'blur(4px)',
  },
  normal: {
    filter: 'blur(0)',
  },
});

const MainPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.modal);

  const showModal = () => {
    dispatch(modalAction(!modalStatus));
  };

  return (
    <div>
      <Container maxWidth="sm" className={modalStatus ? classes.blurred : classes.normal}>
        <div>
          <Typography
            variant="h1"
            gutterBottom
            className={classes.root}
          >
            Welcome to libtrack
          </Typography>
          <Button text="Log in" action={showModal} />
          <ModalComponent showModal={showModal} modalStatus={modalStatus} />
        </div>
        <img src={home} alt="home page logo" className={classes.logo} />
      </Container>
    </div>
  );
};

export default MainPage;
