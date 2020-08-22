import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ddd',
    margin: '50px'
  },
  input: {
      margin: '10px',
      position: 'relative'
  }
});

function Registration() {
    const classes = useStyles();

  return (
    <Container>
        <FormControl className={classes.root}>
            <Typography>Registration</Typography>
            <InputLabel className={classes.input} htmlFor="userNameInput">Username</InputLabel>
            <Input id="userNameInput" aria-describedby="my-helper-text" />
            <InputLabel  className={classes.input} htmlFor="emailInput">Email address</InputLabel>
            <Input id="emailInput" aria-describedby="my-helper-text" />
            <InputLabel className={classes.input} htmlFor="userInput">End User Type</InputLabel>
            <Input id="userInput" aria-describedby="my-helper-text" />
            <InputLabel className={classes.input} htmlFor="passwordInput">Password</InputLabel>
            <Input id="passwordInput" aria-describedby="my-helper-text" />
        </FormControl>
    </Container>
  );
}

export default Registration;