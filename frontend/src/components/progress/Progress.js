/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '42%',
    left: '47%',
  },
});

const Progress = ({ status }) => {
  const [show, setShow] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    setShow(status);
  }, [status]);

  if (show) {
    return (
      <Modal
        open={show}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.root}>
          <CircularProgress size={100} color="primary" />
        </div>
      </Modal>
    );
  }
  return null;
};

export default Progress;
