import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#cc0000',
    },
    title: {
      flexGrow: 1,
    },
  }));

  export default function Footer() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                </Toolbar>
            </AppBar>
        </div>
    );
  }