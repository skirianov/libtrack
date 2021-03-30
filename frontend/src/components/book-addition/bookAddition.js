/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { timesCircle } from '@fortawesome/free-solid-svg-icons';

import Selector from '../selector/Selector';
import { modalAction } from '../modal/modalReducer';
import { booksAction } from '../books-list/booksReducer';

import booksAddServices from './booksAdditionService';
import { bookClear } from './bookReducer';

const BookAddition = () => {
  const [status, setStatus] = useState('Not read');
  const dispatch = useDispatch();
  const book = useSelector((state) => state.book);
  const books = useSelector((state) => state.books);
  const noImage = 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';

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

  const user = useSelector((state) => state.user);

  const addToLibrary = async () => {
    booksAddServices.setToken(user.token);
    const newBook = {
      title: book.title,
      author: book.authors[0],
      published: book.publishedDate,
      img: book.imageLinks ? book.imageLinks.thumbnail : noImage,
      status,
    };

    dispatch(modalAction(false));
    setTimeout(() => dispatch(bookClear()), 500);
    const savedBook = await booksAddServices.addBook(newBook);
    dispatch(booksAction(books.concat(savedBook.data)));
    dispatch(bookClear());
  };

  const closeBook = () => {
    dispatch(modalAction(false));
  };

  return (
    <div className={classes.root}>
      {!book
        ? null
        : (
          <Card className={classes.card}>
            {isMobile ? (
              <Button size="small" variant="contained" onClick={closeBook} className={classes.close}>
                X
              </Button>
            ) : null}
            <CardMedia
              component="img"
              alt={book.title}
              className={classes.img}
              src={book.imageLinks ? book.imageLinks.thumbnail : noImage}
            />
            <CardContent className={classes.info}>
              <Typography variant="body1" color="textPrimary" component="p">
                <strong>Title: </strong>
                {book.title.length > 50 ? `${book.title.substring(0, 40)}...` : book.title}
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                <strong>Author: </strong>
                {book.authors ? book.authors[0].substring(0, 30) : 'No Author'}
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                <strong>Published: </strong>
                {book.publishedDate ? book.publishedDate : 'No published date'}
              </Typography>
              <Selector className={classes.selection} setStatus={setStatus} status={status} />
            </CardContent>
            <CardActions className={classes.action}>
              <Button size="large" color="primary" variant="contained" className={classes.button} onClick={addToLibrary}>
                Add to library
              </Button>
            </CardActions>
          </Card>
        ) }
    </div>
  );
};

export default BookAddition;

const desktop = makeStyles({
  root: {
    height: '70vh',
  },
  card: {
    height: '100%',
    margin: 'auto',
  },
  button: {
    width: '100%',
    padding: 30,
    borderRadius: 0,
  },
  info: {
    marginTop: 10,
  },
  action: {
    padding: 0,
  },
  img: {
    width: '100%',
    height: '60%',
    verticalAlign: 'middle',
  },
  selection: {
    width: '50%',
    marginTop: 10,
  },
});

const mobile = makeStyles({
  card: {
    height: '94vh',
  },
  button: {
    width: '100%',
    padding: 20,
    borderRadius: 0,
    position: 'absolute',
    bottom: 0,
  },
  info: {
    marginTop: 10,
  },
  action: {
    padding: 0,
  },
  img: {
    width: '90%',
    height: '56%',
    margin: 'auto',
  },
  selection: {
    width: '100%',
    marginTop: 20,
  },
  close: {
    position: 'absolute',
    backgroundColor: 'rgba(10,10,10,0.7)',
    border: 'solid lightgrey 1px',
    top: 10,
    right: 10,
    width: 20,
    height: 60,
    fontSize: 35,
    color: 'white',
  },
});

const tablet = makeStyles({
});
