/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';

import Drawer from '../drawer/Drawer';

import { mobile, tablet, desktop } from './styles';
import SearchField from './searchField/searchField';
import Menu from './menu/Menu';
import { searchAction } from './searchReducer';

const NavBar = ({ showModal, device }) => {
  const classesMobile = mobile();
  const classesDesktop = desktop();
  const classes = device === 'desktop'
    ? classesDesktop : classesMobile;
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const toggleMobileSearch = () => {
    dispatch(searchAction(true));
    showModal('MOBILE_SEARCH', 'mobile-search');
  };

  if (device === 'desktop') {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Libtrack -
              {` ${user.username}`}
            </Typography>
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
        <Drawer />
      </AppBar>
    </div>
  );
};

export default NavBar;
