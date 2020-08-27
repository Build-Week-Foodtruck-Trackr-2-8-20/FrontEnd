import React, { useState, Fragment, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { loginUser } from "../actions/userActions";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ddd",
    margin: "100px auto",
    padding: "10px",
    width: "100%",
  },
});

const intialState = {
  username: "",
  password: ""
};

const userSchema = yup.object().shape({
    username: yup.string().required(),
  password: yup.string().required().max(13).min(8),
});

function LogIn(props) {
  const [user, setUser] = useState(intialState);
  const classes = useStyles();
  console.log(user);
  return (
 
    <Container className={classes.root}>
      <div className="loginForm">
        <Fragment>
          <Formik
            initialValues={user}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              // props.loginUser(values);
              setUser(values);
              setTimeout(() => {
                actions.setSubmitting(false);
              }, 500);
            }}
            validationSchema={userSchema}>
            {(props) =>
              !props.isSubmitting ? (
                <form onSubmit={props.handleSubmit} className="">
                  <Field
                    type="email"
                    placeholder="Enter email"
                    onChange={props.handleChange}
                    name="email"
                    value={props.values.email}
                    className="textfield"
                  />

                  {props.errors.email && props.touched.email ? (
                    <span className="textfield">{props.errors.email}</span>
                  ) : (
                    ""
                  )}

                  <Field
                    type="password"
                    onChange={props.handleChange}
                    name="password"
                    value={props.values.password}
                    placeholder="Password"
                    className="textfield"
                  />

                  {props.errors.password && props.touched.password ? (
                    <span className="fieldtext">{props.errors.password}</span>
                  ) : (
                    ""
                  )}

                  <button
                    type="submit"
                    disabled={!props.dirty && props.isSubmitting}
                    className="submitButton">
                    Login
                  </button>
                </form>
              ) : (
                <span className="user">{JSON.stringify(user, null, 2)}</span>
              )
            }
          </Formik>
        </Fragment>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state,
  };
};

export default connect(mapStateToProps, { loginUser })(LogIn);
