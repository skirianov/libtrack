/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';

import ButtonComponent from '../button/Button';
import { booksAction } from '../books-list/booksReducer';

import bookService from './bookService';

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: 10,
  },
  media: {
    height: 250,
  },
  actionMedia: {
    height: 400,
  },
  button: {
    width: 160,
    height: 40,
  },
});

const BookCard = ({ book }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const updateBook = async () => {
    await bookService.setToken(user.token);
    const updatedBook = { ...book, status: 'Not read' };
    const savedBook = await bookService.updateBook(updatedBook);
    console.log(savedBook);
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
      <CardActionArea className={classes.actionMedia}>
        <CardMedia
          className={classes.media}
          image={book.img}
          title={book.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" style={{ height: 70 }}>
            {book.title}
          </Typography>
          <div>
            <Typography variant="body2" color="textSecondary" component="p">
              {book.author}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {book.published}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {book.status}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
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
