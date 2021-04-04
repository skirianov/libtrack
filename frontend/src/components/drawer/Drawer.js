import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useHistory } from 'react-router-dom';

import { logoutUserAction } from '../Login/loggedInUserReducer';

import { drawerAction } from './drawerReducer';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const DrawerComponent = () => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();
  const drawer = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    dispatch(logoutUserAction());
    history.push('/');
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={() => dispatch(drawerAction(false))}
      onKeyDown={() => dispatch(drawerAction(false))}
    >
      <List>
        <ListItem button onClick={() => console.log('pressed first')}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="User settings" />
        </ListItem>
        <ListItem button onClick={logout}>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={drawer}
        onClose={() => dispatch(drawerAction(false))}
        onOpen={() => dispatch(drawerAction(true))}
      >
        {list('left')}
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
