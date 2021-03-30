import React from 'react';
import Button from '@material-ui/core/Button';
import styled from '@material-ui/styles/styled';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const ButtonComponent = ({
  text, action, value, color, className,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color={color}
        onClick={action}
        type="submit"
        value={value}
        className={className}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonComponent;
