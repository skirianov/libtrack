import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
});

const Notification = ({ message }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {message === '' ? null : <p>{message}</p>}
    </div>
  );
};

export default Notification;
