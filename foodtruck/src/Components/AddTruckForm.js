import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";
import { connect } from "react-redux";
import { addTruck } from "../actions/userActions";

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

function AddTruckForm(props) {
  console.log(props);
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      imageURL: "",
      cuisineType: "Mexican",
      location: "",
      username: props.user.username,
    },
    // validationSchema: Yup.object({
    //   role: Yup.string(),
    //   username: Yup.string()
    //     .max(20, "Must be 20 characters or less")
    //     .required("Required"),
    //   email: Yup.string().email("Invalid email address").required("Required"),
    //   password: Yup.string()
    //     .min(6, "Password must be at least 6 characters long.")
    //     .required("Required"),
    // }),

    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted");
      console.log("values: ", values);
      props.addTruck(values);
      resetForm();
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container className={classes.root}>
      <h5>Add Truck</h5>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="locationInput"> Image URL </label>
        <input
          id="addressInput"
          name="imageURL"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageURL}
        />
        {/* {formik.touched.username && formik.errors.username ? (
          <div> {formik.errors.username} </div>
        ) : null} */}
        <label htmlFor="cuisineTypeSelect"> Cuisine Type </label>
        <select
          className={classes.select}
          name="cuisineType"
          id="roleInput"
          onChange={formik.handleChange}
          value={formik.values.cuisineType}>
          <option value="Mexican"> Mexican </option>
          <option value="BBQ"> BBQ </option>
          <option value="Korean"> Korean </option>
        </select>
        <label htmlFor="locationInput"> Address </label>
        <input
          id="addressInput"
          name="location"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.location}
        />
        {/* {formik.touched.username && formik.errors.username ? (
          <div> {formik.errors.username} </div>
        ) : null} */}

        <button className={classes.button} type="submit">
          Submit
        </button>
      </form>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  addTruck,
})(AddTruckForm);
