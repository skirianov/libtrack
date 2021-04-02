import { makeStyles } from '@material-ui/core/styles';

export const desktop = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export const mobile = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  searchIcon: {
    fontSize: '1.3em',
  },
  menuButton: {
    marginRight: 0,
  },
  title: {
    flexGrow: 1,
    display: 'block',
  },
}));

export const tablet = makeStyles({

});
