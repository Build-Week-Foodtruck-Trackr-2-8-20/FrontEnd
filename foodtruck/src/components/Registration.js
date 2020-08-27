import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";
import { connect } from "react-redux";
import { registerUser } from "../actions/userActions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ddd",
    margin: "200px auto",
    padding: "10px",
    width: "80%",
  },
  input: {
    margin: "10px",
    position: "relative",
  },
  select: {
    height: "50px",
    width: "100%",
  },
  button: {
    margin: "5px 0",
  },
});

function Registration(props) {
  const history = useHistory();
  console.log(props);
  const classes = useStyles();
  //const [value, setValue] = React.useState('diner');
  /*
  const [formState, setFormState] = useState({
    id: Date.now(),
    username: "",
    email: "",
    password: "",
    role: "diner",
  });*/

  // console.log(formState);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role: 1,
    },
    validationSchema: Yup.object({
      role: Yup.string(),
      username: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted");
      console.log("values: ", values);
      props.registerUser(values);
      resetForm();
      alert(JSON.stringify(values, null, 2));
      history.push("/login");

      /*
      axios
        .post("https://reqres.in/api/users", formState) // why is this formState instead of values?
        .then((res) => {
          console.log(res.data);
          setFormState({
            username: "",
            email: "",
            password: "",
            role: "diner",
          });
        })
        .catch((err) => console.log(err.response));
        */
    },
  });

  return (
    <Container className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="roleInput"> username Type </label>{" "}
        <select
          className={classes.select}
          name="role"
          id="roleInput"
          onChange={formik.handleChange}
          value={formik.values.role}>
          <option value="1"> Diner </option>{" "}
          <option value="2"> Operator </option>{" "}
        </select>{" "}
        <label htmlFor="usernameInput"> username </label>{" "}
        <input
          id="usernameInput"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />{" "}
        {formik.touched.username && formik.errors.username ? (
          <div> {formik.errors.username} </div>
        ) : null}{" "}
        <label htmlFor="email"> Email Address </label>{" "}
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />{" "}
        {formik.touched.email && formik.errors.email ? (
          <div> {formik.errors.email} </div>
        ) : null}{" "}
        <label htmlFor="passwordInput"> Password </label>{" "}
        <input
          id="passwordInput"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />{" "}
        {formik.touched.password && formik.errors.password ? (
          <div> {formik.errors.password} </div>
        ) : null}{" "}
        <button className={classes.button} type="submit">
          Submit{" "}
        </button>{" "}
      </form>{" "}
    </Container>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state,
    // registration,
  };
};

export default connect(mapStateToProps, {
  registerUser,
})(Registration);
