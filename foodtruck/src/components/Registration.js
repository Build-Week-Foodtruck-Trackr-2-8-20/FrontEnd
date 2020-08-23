import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import '../App.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ddd',
    width: '80%'
  },
  input: {
      margin: '10px',
      position: 'relative'
  }
});

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.userName) {
    errors.userName = 'Required';
  } else if (values.userName.length > 20) {
    errors.userName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 20) {
    errors.password = 'Must be 20 characters or less';
  }

  return errors;
};

function Registration() {
    const classes = useStyles();
    const [value, setValue] = React.useState('diner');

    const handleChange = (event) => {
      setValue(event.target.value);
      console.log("Change registered.")
    };

    const formik = useFormik({
      initialValues: {
        firstName: '',
        userName: '',
        email: '',
        password: '',
        picked: ''
      },
      validate,
      onSubmit: values => {
        console.log("Form submitted")
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
    <Container className={classes.root}>
     <form onSubmit={formik.handleSubmit}>
      <label htmlFor="operatorInput">Operator</label>
       <input
         id="operatorInput"
         name="picked"
         type="radio"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.operator}
       />
      <label htmlFor="dinerInput">Diner</label>
       <input
         id="dinerInput"
         name="picked"
         type="radio"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.diner}
       />
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
       <label htmlFor="userNameInput">Username</label>
       <input
         id="userNameInput"
         name="userName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userName}
       />
       {formik.touched.userName && formik.errors.userName ? (
         <div>{formik.errors.userName}</div>
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
      <label htmlFor="passwordInput">Password</label>
       <input
         id="passwordInput"
         name="password"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
       />
       {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
       <button type="submit">Submit</button>
     </form>
    </Container>
  );
}

export default Registration;