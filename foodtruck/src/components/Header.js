import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Food Truck App
          </Typography>
          <Button color="inherit">
            <Link to="/">
                <div className="home-button">Home</div>
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/tacos">
                <div className="home-button">Tacos</div>
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/bbq">
                <div className="home-button">BBQ</div>
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/korean">
                <div className="home-button">Korean</div>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
