import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#cc0000',
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: '10px',
    backgroundColor: '#fedc56',
    color: '#ddd'
  },
  link: {
      textDecoration:'none'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar color="danger">
          <Typography variant="h6" className={classes.title}>
            Food Truck App
          </Typography>
          <Button className={classes.button}>
            <Link to="/" className={classes.link}>
                Home
            </Link>
          </Button>
          <Button className={classes.button}>
            <Link to="/tacos" className={classes.link}>
                Tacos
            </Link>
          </Button>
          <Button className={classes.button}>
            <Link to="/bbq" className={classes.link}>
                BBQ
            </Link>
          </Button>
          <Button className={classes.button}>
            <Link to="/korean" className={classes.link}>
                Korean
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
