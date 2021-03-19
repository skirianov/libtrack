import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    color: 'black',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.primary}`,
    display: 'block',
  },
  hidden: {
    display: 'none',
  },
}));

const SearchBarResults = () => {
  const classes = useStyles();
  const books = useSelector((state) => state.books);
  return (
    <List
      component="nav"
      className={books.length > 0 ? classes.root : classes.hidden}
      aria-label="mailbox folders"
    >
      {books
        ? books.map((book) => (
          <div key={book.id}>
            <ListItem button onClick={() => console.log(book.id)}>
              <ListItemText primary={book.volumeInfo.title} />
            </ListItem>
            <Divider />
          </div>
        ))
        : null}
    </List>
  );
};

export default SearchBarResults;
