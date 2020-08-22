import React from 'react';
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
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

    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      validate,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });

//imports
//state declarations
//validation method
//inputChange
//formSubmit
//useEffect
//formSchema
//return statement
  return (
    <Container>
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