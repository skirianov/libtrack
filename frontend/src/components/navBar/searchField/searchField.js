/* eslint-disable max-len */
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

import searchService from '../searchService';
import SearchBarResults from '../searchResults/SearchBarResults';

const SearchField = ({ showModal, device }) => {
  const [books, setBooks] = useState([]);
  const classes = useStyles();

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

  return (
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
      {books ? <SearchBarResults showModal={showModal} books={books} device={device} /> : null}
    </div>
  );
};

export default SearchField;

const useStyles = makeStyles((theme) => ({
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
