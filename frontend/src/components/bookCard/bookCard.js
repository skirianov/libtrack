import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: 10,
  },
  media: {
    height: 180,
  },
  actionMedia: {
    height: 300,
  },
});

const BookCard = ({ book }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionMedia}>
        <CardMedia
          className={classes.media}
          image={book.img}
          title={book.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {book.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {book.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {book.published}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {book.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Update
        </Button>
        <Button size="small" color="danger">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
