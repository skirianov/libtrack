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

const BookCard = ({ book }) => {
  const [status, setStatus] = useState('');
  const isDesktop = useMediaQuery({
    minDeviceWidth: 1024,
  });
  const isTablet = useMediaQuery({
    minWidth: 600,
    maxWidth: 1024,
  });
  const isMobile = useMediaQuery({
    minWidth: 600,
  });
  const classesMobile = mobile();
  const classesTablet = tablet();
  const classesDesktop = desktop();
  const classes = isDesktop ? classesDesktop : (isMobile ? classesTablet : classesMobile);
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
    await bookService.setToken(user.token);
    await bookService.deleteBook(book);
    const array = [...books];
    const index = array.indexOf(book);
    array.slice(index, 1);
    dispatch(booksAction(array));
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
              {book.title}
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
                {book.status}
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
    width: 345,
    margin: 10,
  },
  media: {
    height: 250,
  },
  button: {
    width: 160,
    height: 40,
  },
  selection: {
    width: 310,
    marginTop: 20,
  },
});

const mobile = makeStyles({
  root: {
    width: '100%',
    boxShadow: '0px 0px 11px -1px rgba(117,117,117,0.8)',
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    height: 160,
  },
  media: {
    height: '100%',
    width: 100,
  },
  imgContainer: {
    height: '100%',
    width: 100,
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
    width: 250,
    height: 160,
    display: 'flex',
    flexDirection: 'column',
  },
});

const tablet = makeStyles({
  root: {
    backgroundColor: 'blue',
  },
});
