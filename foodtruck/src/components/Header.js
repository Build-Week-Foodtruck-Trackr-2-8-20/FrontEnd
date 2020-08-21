import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" theme={theme} className={classes.root}>
        <Toolbar color="danger">
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
