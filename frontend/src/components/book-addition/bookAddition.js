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
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { useSelector, useDispatch } from 'react-redux';

import { modalAction } from '../modal/modalReducer';
import { booksAction } from '../books-list/booksReducer';

import booksAddServices from './booksAdditionService';
import { bookClear } from './bookReducer';

const BookAddition = () => {
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const book = useSelector((state) => state.book);
  const books = useSelector((state) => state.books);
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
      status,
    };

    dispatch(modalAction(false));
    setTimeout(() => dispatch(bookClear()), 500);
    const savedBook = await booksAddServices.addBook(newBook);
    dispatch(booksAction(books.concat(savedBook.data)));
    dispatch(bookClear());
  };

  return (
    <div className={classes.root}>
      {!book
        ? null
        : (
          <Card className={classes.card}>
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
                {book.authors}
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                <strong>Published: </strong>
                {book.publishedDate}
              </Typography>
              <FormControl variant="outlined" className={classes.selection}>
                <InputLabel id="status">Status</InputLabel>
                <Select
                  labelId="status"
                  id="status-selector"
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                  label="Status"
                >
                  <MenuItem value="Not read">
                    Not read
                  </MenuItem>
                  <MenuItem value="Read">
                    Read
                  </MenuItem>
                  <MenuItem value="Reading">
                    Reading
                  </MenuItem>
                </Select>
              </FormControl>
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

const useStyles = makeStyles({
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
