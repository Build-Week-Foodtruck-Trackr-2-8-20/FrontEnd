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
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
       <button type="submit">Submit</button>
     </form>
    </Container>
  );
}

export default Registration;