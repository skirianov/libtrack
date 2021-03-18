import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import Button from '../button/Button';
import Progress from '../progress/Progress';

import { loggedInUserAction } from './loggedInUserReducer';
import loginService from './loginService';

const useStyles = makeStyles({
  form: {
    height: '100%',
  },
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const loginUser = async (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };

    await loginService.loginUser(user);
    console.log('user logged in');
    setShow(!show);
  };

  return (
    <div className="col-lg-5">
      <form className={classes.form} onSubmit={loginUser}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button text="sign in" />
      </form>
      {show ? <Progress status={show} /> : null}
      <p>
        {'Dont have an account '}
        <a href="google.com">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
