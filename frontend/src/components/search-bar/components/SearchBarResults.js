import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { bookAction } from '../../book-addition/bookReducer';

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

const SearchBarResults = ({ showModal, books }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <List
      component="nav"
      className={books.length > 0 ? classes.root : classes.hidden}
      aria-label="mailbox folders"
    >
      {books
        ? books.map((book) => (
          <div key={book.id}>
            <ListItem button onClick={() => { showModal(); dispatch(bookAction(book)); }}>
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
