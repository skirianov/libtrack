/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { logoutUserAction } from '../login-box/loggedInUserReducer';
import SwipeableTemporaryDrawer from '../drawer/Drawer';

import SearchBarResults from './components/SearchBarResults';
import searchService from './searchService';

const SearchBar = ({ showModal }) => {
  const [books, setBooks] = useState([]);

  const isDesktop = useMediaQuery({
    minDeviceWidth: 1024,
  });
  const isTablet = useMediaQuery({
    minWidth: 600,
    maxWidth: 1024,
  });
  const isMobile = useMediaQuery({
    maxWidth: 600,
  });
  const classesMobile = mobile();
  const classesTablet = tablet();
  const classesDesktop = desktop();
  const classes = isDesktop ? classesDesktop : (isMobile ? classesMobile : classesTablet);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const handleQuery = async ({ target }) => {
    const toArray = target.value.split(' ');
    const toString = `${toArray.join('+')}`;
    if (toString) {
      searchService.getBooks(toString).then((receivedBooks) => {
        if (receivedBooks && toString !== '') {
          const processedBooks = receivedBooks.map((book) => book);
          setBooks(processedBooks);
        }
      }).catch((error) => {
        setBooks([]);
      });
    } else {
      setBooks([]);
    }
  };

  const logout = () => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    dispatch(logoutUserAction());
    history.push('/');
  };

  if (isDesktop) {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Libtrack -
              {` ${user.username}`}
            </Typography>
            <Button
              onClick={logout}
            >
              Log out
            </Button>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                fullWidth
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleQuery}
              />
              {books ? <SearchBarResults showModal={showModal} books={books} /> : null}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Libtrack -
            {` ${user.username}`}
          </Typography>
        </Toolbar>
        <SwipeableTemporaryDrawer />
      </AppBar>
    </div>
  );
};

export default SearchBar;

const desktop = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '30%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  },
}));

const mobile = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'block',
  },
}));

const tablet = makeStyles({

});
