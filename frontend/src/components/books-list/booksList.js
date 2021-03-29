/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BookCard from '../bookCard/bookCard';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexGrow: 3,
    marginTop: 30,
  },
});

const BookList = ({ books }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {books ? (
        books.map((book) => <BookCard key={book.id} book={book} />)
      ) : null }
    </div>
  );
};

export default BookList;
