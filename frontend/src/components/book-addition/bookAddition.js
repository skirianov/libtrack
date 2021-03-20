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
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    height: 700,
    width: 400,
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
  const book = useSelector((state) => state.book);

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={book.title}
            height="500px"
            src={book.imageLinks.thumbnail}
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
          <Button size="large" color="primary" variant="contained" className={classes.button}>
            Add to library
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default BookAddition;
