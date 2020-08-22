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
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ddd',
    margin: '20%',
    width: '60%'
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

//imports
//state declarations
//validation method
//inputChange
//formSubmit
//useEffect
//formSchema
//return statement
  return (
    <Container className={classes.root}>
      <form onSubmit={() => {}}>
        <TextField
          id="name"
          name="name"
          label="Name"
          fullWidth

        />
        <TextField
          id="email"
          name="email"
          label="Email"
          fullWidth
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          fullWidth
          type="password"
        />
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          fullWidth
          type="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="raised"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Registration;