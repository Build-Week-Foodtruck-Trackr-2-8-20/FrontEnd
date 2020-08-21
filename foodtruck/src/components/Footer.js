import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../App.css';

const useStyles = makeStyles((theme) => ({
    appBar: {
      top: 'auto',
      bottom: 0,
    }
  }));

  export default function Footer() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <AppBar position="static" color="secondary" className={classes.appBar}>
          <Toolbar>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }