/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import CardActionArea from '@material-ui/core/CardActionArea';

import ButtonComponent from '../button/Button';
import Selector from '../selector/Selector';
import { booksAction } from '../books-list/booksReducer';

import bookService from './bookService';

const BookCard = ({ book, size }) => {
  const [status, setStatus] = useState('');
  const classesMobile = mobile();
  const classesDesktop = desktop();
  const classes = size > 720 ? classesDesktop : classesMobile;
  const isDesktop = size > 720;
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const updateBook = async () => {
    await bookService.setToken(user.token);
    const updatedBook = { ...book, status };
    const savedBook = await bookService.updateBook(updatedBook);
    const array = [...books];
    array.forEach((each) => {
      if (each.id === savedBook.id) {
        each = Object.assign(each, savedBook);
      }
      return each;
    });
    dispatch(booksAction(array));
  };

  const deleteBook = async () => {
    const array = [...books];
    const index = array.indexOf(book);
    array.splice(index, 1);
    dispatch(booksAction(array));
    const token = await bookService.setToken(user.token);
    const response = await bookService.deleteBook(book);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <div className={classes.imgContainer}>
          <CardMedia
            className={classes.media}
            image={book.img}
            title={book.title}
          />
        </div>
        <div>
          <CardContent className={classes.info}>
            <Typography
              gutterBottom
              variant={isDesktop ? 'h6' : 'subtitle1'}
              component="h6"
              style={{ height: 70, overflow: 'anywhere' }}
            >
              {book.title.length > 50 ? `${book.title.substring(0, 30)}...` : book.title}
            </Typography>
            <div>
              <Typography
                variant={isDesktop ? 'body1' : 'body2'}
                color="textSecondary"
                component="p"
              >
                <strong>Author: </strong>
                {book.author}
              </Typography>
              <Typography
                variant={isDesktop ? 'body1' : 'body2'}
                color="textSecondary"
                component="p"
              >
                <strong>Published: </strong>
                {book.published}
              </Typography>
              <Typography
                variant={isDesktop ? 'body1' : 'body2'}
                color="textSecondary"
                component="p"
              >
                <strong>Status: </strong>
                {size < 720 ? book.status : (
                  <Selector
                    className={classes.selection}
                    setStatus={setStatus}
                    status={status}
                  />
                )}
              </Typography>
            </div>
          </CardContent>
        </div>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <ButtonComponent
          size="small"
          color="primary"
          className={classes.button}
          text="Update"
          action={updateBook}
        />
        <ButtonComponent
          size="small"
          color="secondary"
          className={classes.button}
          text="Delete"
          action={deleteBook}
        />
      </CardActions>
    </Card>
  );
};

export default BookCard;

const desktop = makeStyles({
  root: {
    width: '22vw',
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: '18vh',
  },
  button: {
    width: '10vw',
    height: 40,
  },
  selection: {
    width: 310,
    marginTop: 20,
  },
  actionArea: {
    height: '60%',
  },
});

const mobile = makeStyles({
  root: {
    width: '100%',
    boxShadow: '0px 0px 11px -1px rgba(117,117,117,0.8)',
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  media: {
    height: '100%',
    width: '30vw',
  },
  imgContainer: {
    height: '100%',
    width: '30vw',
    backgroundColor: 'blue',
  },
  selection: {
    width: '100%',
    marginTop: 10,
  },
  actions: {
    display: 'none',
  },
  actionArea: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  info: {
    width: '60vw',
    display: 'flex',
    flexDirection: 'column',
  },
});

const tablet = makeStyles({
  root: {
    backgroundColor: 'blue',
  },
});
