import React from 'react';
import { useHistory } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import DrawerComponent from '../drawer/Drawer';
import { logoutUserAction } from '../Login/loggedInUserReducer';

import { mobile, desktop } from './styles';
import SearchField from './searchField/searchField';
import Menu from './menu/Menu';
import { searchAction } from './searchReducer';

const NavBar = ({ showModal, size }) => {
  const history = useHistory();
  const classesMobile = mobile();
  const classesDesktop = desktop();
  const classes = size > 720
    ? classesDesktop : classesMobile;
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const toggleMobileSearch = () => {
    dispatch(searchAction(true));
    showModal('MOBILE_SEARCH', 'mobile-search');
  };

  const logoutUser = () => {
    dispatch(logoutUserAction());
    history.push('/');
  };

  if (size > 720) {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Libtrack -
              {` ${user.username}`}
            </Typography>
            <Button onClick={logoutUser} color="inherit">
              Log Out
            </Button>
            <SearchField showModal={showModal} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Menu className={classes.menuButton} />
          <Typography className={classes.title} variant="h6" noWrap>
            Libtrack -
            {` ${user.username}`}
          </Typography>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleMobileSearch}
          >
            <SearchIcon className={classes.searchIcon} />
          </IconButton>
        </Toolbar>
        <DrawerComponent />
      </AppBar>
    </div>
  );
};

export default NavBar;
