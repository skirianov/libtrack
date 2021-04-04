/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BookCard from '../bookCard/bookCard';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '96%',
    justifyContent: 'center',
    marginTop: 8,
  },
});

const BookList = ({ books, size }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {books ? (
        books.map((book) => <BookCard key={book.id} book={book} size={size} />)
      ) : null }
    </div>
  );
};

export default BookList;
