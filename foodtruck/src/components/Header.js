import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
    },
  }));

export default function Header() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" position="fixed">
          <Toolbar className={classes.toolbar}>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  