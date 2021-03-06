import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
//import '../App.css';
//import ImgSlider from "./Carousel";
import Cards from "./cards";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#eee",
    margin: "10px auto",
    padding: "10px",
    width: "100%",
    height: "100vh",
  },
  header: {
    padding: "0px",
  },
  image: {
    width: "100%",
    borderRadius: "0px",
    marginTop: "0px",
  },
  content: {
    display: "flex",
    width: "100%",
    height: "100vh",
    padding: "0px",
  },
  left: {
    width: "50%",
    backgroundColor: "green",
  },
  right: {
    width: "50%",
    backgroundColor: "yellow",
  },
});

function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Typography>Home</Typography>
        <Container className={classes.header}>

        </Container>
        <Cards />
      </Container>
    </React.Fragment>
  );
}

export default Home;
