import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { drawerAction } from '../../drawer/drawerReducer';

const Menu = ({ className }) => {
  const dispatch = useDispatch();
  const drawerStatus = useSelector((state) => state.drawer);
  return (
    <IconButton
      edge="start"
      className={className}
      color="inherit"
      aria-label="open drawer"
      onClick={() => dispatch(drawerAction(!drawerStatus))}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default Menu;
