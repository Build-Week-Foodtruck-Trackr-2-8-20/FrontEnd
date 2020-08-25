import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik, Field, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import '../App.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ddd',
    margin: '200px auto',
    padding: '10px',
    width: '80%'
  },
  input: {
      margin: '10px',
      position: 'relative'
  },
  select: {
    height: '50px',
    width: '100%'
  },
  button: {
    margin: '5px 0'
  }
});

function Registration() {
    const classes = useStyles();
    //const [value, setValue] = React.useState('diner');
  
    const formik = useFormik({
      initialValues: {
        userName: '',
        email: '',
        password: '',
        userType: 'diner'
      },
      validationSchema: Yup.object({
        userType: Yup.string(),
        userName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .required('Required')
      }),

      onSubmit: (values, {resetForm}) => {
        console.log("Form submitted")
        console.log(values)
        alert(JSON.stringify(values, null, 2));
        resetForm({ values: '' })
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
     <label htmlFor="userTypeInput">Username Type</label>
     <select className={classes.select} name="userType" id="userTypeInput" onChange={formik.handleChange} value={formik.values.userType}>
        <option value="">--Please choose an option--</option>
        <option value="diner">Diner</option>
        <option value="operator">Operator</option>
      </select>
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
         type="password"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
       />
       {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
       <button className={classes.button} type="submit">Submit</button>
     </form>
    </Container>
  );
}

export default Registration;