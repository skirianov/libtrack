/* eslint-disable max-len */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';

import { modalAction } from '../modal/modalReducer';
import { booksAction } from '../books-list/booksReducer';

import booksAddServices from './booksAdditionService';
import { bookClear } from './bookReducer';

const useStyles = makeStyles({
  root: {
    height: 700,
    width: '100%',
  },
  button: {
    width: '100%',
    padding: 30,
    borderRadius: 0,
  },
  content: {
    marginTop: 10,
  },
  action: {
    padding: 0,
  },
});

const BookAddition = () => {
  const [img, setImg] = useState('');
  const dispatch = useDispatch();
  const book = useSelector((state) => state.book);
  let books = useSelector((state) => state.books);
  const noImage = 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';

  const classes = useStyles();
  const user = useSelector((state) => state.user);

  const addToLibrary = async () => {
    booksAddServices.setToken(user.token);
    const newBook = {
      title: book.title,
      author: book.authors[0],
      published: book.publishedDate,
      img: book.imageLinks ? book.imageLinks.thumbnail : noImage,
    };

    dispatch(modalAction(false));
    setTimeout(() => dispatch(bookClear()), 500);
    const savedBook = await booksAddServices.addBook(newBook);
    books = books.concat(savedBook.data);
    dispatch(booksAction(books));
    console.log(savedBook);
  };

  return (
    <div>
      {!book
        ? null
        : (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={book.title}
                height="500px"
                src={book.imageLinks ? book.imageLinks.thumbnail : noImage}
                title={book.title}
              />
              <CardContent className={classes.content}>
                <Typography variant="body1" color="textPrimary" component="p">
                  {`Title: ${book.title}`}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                  {`Author: ${book.authors}`}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                  {`Published: ${book.publishedDate}`}
                </Typography>
              </CardContent>
            </CardActionArea>
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
