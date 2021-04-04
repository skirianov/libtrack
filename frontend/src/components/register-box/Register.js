import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import InputLabel from '@material-ui/core/InputLabel';

import Button from '../button/Button';
import Progress from '../progress/Progress';
import loginService from '../Login/loginService';
import { modalAction } from '../modal/modalReducer';

const useStyles = makeStyles({
  form: {
    marginTop: 40,
  },
  close: {
    width: '100%',
  },
  button: {
    width: '100%',
    height: 50,
    marginTop: 20,
  },
  label: {
    marginTop: 10,
    marginLeft: 5,
    color: '#4a4a4a',
  },
});

const Register = ({ device, className }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [show, setShow] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleUsernameChange = ({ target }) => {
    setUsername(target.value);
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleConfirmPassword = ({ target }) => {
    setConfirmPassword(target.value);
  };

  const registerUser = async (event) => {
    event.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };

    const returned = await loginService.registerNewUser(newUser);
  };

  const closeModal = () => {
    dispatch(modalAction('CLOSE_MODAL', ''));
  };

  return (
    <div>
      {device ? (
        <Button
          action={closeModal}
          text={<CancelIcon style={{ fontSize: 40 }} />}
          className={classes.close}
        />
      ) : null}
      <form className={classes.form} onSubmit={registerUser}>
        <InputLabel className={classes.label}>Username</InputLabel>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="off"
          autoFocus
          onChange={handleUsernameChange}
        />
        <InputLabel className={classes.label}>Email</InputLabel>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="off"
          onChange={handleEmailChange}
        />
        <InputLabel className={classes.label}>Password</InputLabel>
        <TextField
          variant="outlined"
          margin="normal"
          type="password"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          autoComplete="off"
          onChange={handlePasswordChange}
        />
        <InputLabel className={classes.label}>Confirm password</InputLabel>
        <TextField
          variant="outlined"
          margin="normal"
          type="password"
          required
          fullWidth
          id="confirm-password"
          label="Confirm password"
          name="confirm-password"
          autoComplete="off"
          onChange={handlePasswordChange}
        />
        <Button text="sign up" color="primary" className={classes.button} />
      </form>
      {show ? <Progress status={show} /> : null}
    </div>
  );
};

export default Register;
