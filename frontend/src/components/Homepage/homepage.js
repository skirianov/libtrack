/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Button from '../button/Button';
import ModalComponent from '../modal/Modal';
import { modalAction } from '../modal/modalReducer';

import home from '/home/sergii/projects/dev/libtrack/frontend/src/images/reading-homepage.svg';

const HomePage = ({ size }) => {
  const classesMobile = mobile();
  const classesTablet = tablet();
  const classesDesktop = desktop();
  const classes = size > 720
    ? classesDesktop : classesMobile;
  const dispatch = useDispatch();

  const showModal = (type, text) => {
    dispatch(modalAction(type, text));
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <div>
          <Typography
            gutterBottom
            className={classes.header}
          >
            Welcome to libtrack
          </Typography>
          <div className={classes.actions}>
            <Button
              text="Log in"
              action={() => showModal('LOGIN', 'login')}
              value="login"
              className={classes.button}
              color="primary"
            />
            <Button
              text="sign up"
              action={() => showModal('REGISTER', 'register')}
              value="register"
              className={classes.button}
              color="default"
            />
          </div>
          <ModalComponent
            showModal={showModal}
            size={size}
          />
        </div>
        <img src={home} alt="home page logo" className={classes.logo} />
      </Container>
    </div>
  );
};

export default HomePage;

const desktop = makeStyles({
  header: {
    color: '#6c63ff',
    textAlign: 'center',
    fontSize: '5em',
    fontWeight: 500,
  },
  logo: {
    margin: 'auto',
    marginTop: '10%',
  },
  blurred: {
    filter: 'blur(4px)',
  },
  normal: {
    filter: 'blur(0)',
  },
  button: {
    width: '50%',
    marginTop: 10,
  },
  modal: {
    backgroundColor: 'red',
  },
});

const mobile = makeStyles({
  root: {
    width: '100%',
  },
  header: {
    color: '#6c63ff',
    textAlign: 'center',
    fontSize: '3em',
    marginTop: 20,
  },
  logo: {
    width: '100%',
    height: 'auto',
    marginTop: '10%',
  },
  actions: {
    bottom: 0,
    margin: 'auto',
  },
  button: {
    width: '100%',
    height: 50,
    marginTop: 18,
  },
  modal: {
    position: 'absolute',
    top: '26%',
    height: '50vh',
  },
});

const tablet = makeStyles({

});
