import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Button from '../button/Button';
import Progress from '../progress/Progress';
import loginService from '../login-box/loginService';

const useStyles = makeStyles({
  form: {
    height: '100%',
  },
});

const Register = ({ setStatus }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [show, setShow] = useState(false);

  const classes = useStyles();

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
    setStatus('registered');
  };

  return (
    <div>
      <form className={classes.form} onSubmit={registerUser}>
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
        <Button text="sign up" />
      </form>
      {show ? <Progress status={show} /> : null}
    </div>
  );
};

export default Register;
