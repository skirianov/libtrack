import React from 'react';
import Button from '@material-ui/core/Button';
import styled from '@material-ui/styles/styled';
import makeStyles from '@material-ui/core/styles/makeStyles';

const MyButon = styled(Button)({
  margin: 'auto',
  width: '40%',
});

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
});

const ButtonComponent = ({
  text, action, value, color, className,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MyButon
        variant="contained"
        color={color}
        onClick={action}
        type="submit"
        value={value}
        className={className}
      >
        {text}
      </MyButon>
    </div>
  );
};

export default ButtonComponent;
