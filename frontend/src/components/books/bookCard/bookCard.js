/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import CardActionArea from '@material-ui/core/CardActionArea';
import ReactCardFlip from 'react-card-flip';

import ButtonComponent from '../../button/Button';
import Selector from '../../selector/Selector';
import { booksAction } from '../books-list/booksReducer';
import booksService from '../bookService';

import MobileCard from './mobileCard/mobileCard';

const BookCard = ({ book, size }) => {
  const [status, setStatus] = useState('');
  const [flipped, setFlipped] = useState(false);
  const classesMobile = mobile();
  const classesDesktop = desktop();
  const classes = size > 720 ? classesDesktop : classesMobile;
  const isDesktop = size > 720;
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (size > 720) {
      setFlipped(false);
    }
  }, [size]);

  const updateBook = async () => {
    await booksService.setToken(user.token);
    const updatedBook = { ...book, status };
    const savedBook = await booksService.updateBook(updatedBook);
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
    const token = await booksService.setToken(user.token);
    const response = await booksService.deleteBook(book);
  };

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
      <Card className={classes.root}>
        <CardActionArea
          className={classes.actionArea}
          disabled={size > 720}
          onClick={() => setFlipped(!flipped)}
        >
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
                {book.title.length > 50
                  ? `${book.title.substring(0, 30)}...` : book.title}
              </Typography>
              <div>
                <Typography
                  variant={isDesktop ? 'body1' : 'body2'}
                  color="textSecondary"
                >
                  <strong>Author: </strong>
                  {book.author}
                </Typography>
                <Typography
                  variant={isDesktop ? 'body1' : 'body2'}
                  color="textSecondary"
                >
                  <strong>Published: </strong>
                  {book.published}
                </Typography>
                <Typography
                  variant={isDesktop ? 'body1' : 'body2'}
                  color="textSecondary"
                  component="div"
                >
                  <strong>Status: </strong>
                  {book.status}
                </Typography>
              </div>
            </CardContent>
          </div>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Selector
            className={classes.selection}
            setStatus={setStatus}
            status={status}
          />
          <div className={classes.buttonArea}>
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
          </div>
        </CardActions>
      </Card>
      <MobileCard
        status={status}
        setStatus={setStatus}
        setFlipped={setFlipped}
        updateBook={updateBook}
        deleteBook={deleteBook}
        book={book}
        className={classes.root}
      />
    </ReactCardFlip>
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
    backgroundColor: 'white',
  },
  button: {
    width: '10vw',
    margin: 10,
    height: 40,
  },
  selection: {
    width: '90%',
    marginBottom: 20,
  },
  actionArea: {
    height: '60%',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonArea: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
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
