import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ButtonComponent from '../../../button/Button';
import Selector from '../../../selector/Selector';

const MobileCard = ({
  setStatus, setFlipped, updateBook, deleteBook, book, status,
}) => {
  const classes = mobile();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.info}>
        <div>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="h6"
            style={{ height: 70, overflow: 'anywhere' }}
            onClick={() => setFlipped(false)}
          >
            <strong>Status: </strong>
            {book.status}
          </Typography>
        </div>
        <div className={classes.action}>
          <Selector
            className={classes.selection}
            setStatus={setStatus}
            status={status}
          />
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
      </CardContent>
    </Card>
  );
};

export default MobileCard;

const mobile = makeStyles({
  root: {
    boxShadow: '0px 0px 11px -1px rgba(117,117,117,0.8)',
    marginLeft: '4vw',
    marginBottom: 10,
    marginTop: 10,
    width: '93.5vw',
    height: 175.6,
  },
  selection: {
    width: '100%',
    margin: 10,
  },
  button: {
    width: '80%',
  },
  info: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
  },
});
