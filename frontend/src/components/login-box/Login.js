import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../button/Button';
import Progress from '../progress/Progress';
import Notification from '../notification/Notification';
import { modalAction } from '../modal/modalReducer';

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
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState('');

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const loginUser = async (event) => {
    event.preventDefault();
    setShow(true);
    const user = {
      email,
      password,
    };

    const loggedInUser = await loginService.loginUser(user);
    if (loggedInUser === '401') {
      setMessage('Wrong email or password. Please try again');
    } else {
      setMessage('Successfully logged in, redirecting...');
      setEmail('');
      setPassword('');
      if (remember) {
        window.localStorage.setItem('userLoggedIn', JSON.stringify(loggedInUser));
      } else {
        window.sessionStorage.setItem('sessionUser', JSON.stringify(loggedInUser));
      }
      dispatch(loggedInUserAction(loggedInUser));
      dispatch(modalAction(false));
      history.push('/main');
    }
  };

  const rememberMe = () => {
    setRemember(!remember);
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
          onChange={rememberMe}
        />
        <Button text="sign in" />
      </form>
      {show ? <Progress status={show} /> : null}
      <Notification message={message} />
    </div>
  );
};

export default Login;
