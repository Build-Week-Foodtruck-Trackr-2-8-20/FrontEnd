import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
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
    const [value, setValue] = React.useState('diner');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

  return (
    <Container>
        <FormControl className={classes.root}>
            <Typography>Registration</Typography>
            <InputLabel className={classes.input} htmlFor="userNameInput">Username</InputLabel>
            <Input id="userNameInput" aria-describedby="my-helper-text" />
            <InputLabel  className={classes.input} htmlFor="emailInput">Email address</InputLabel>
            <Input id="emailInput" aria-describedby="my-helper-text" />
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="diner" control={<Radio />} label="Diner" />
                <FormControlLabel value="operator" control={<Radio />} label="Operator" />
            </RadioGroup>
            <InputLabel className={classes.input} htmlFor="passwordInput">Password</InputLabel>
            <Input id="passwordInput" aria-describedby="my-helper-text" />
            <Button>Submit</Button>
        </FormControl>
    </Container>
  );
}

export default Registration;