import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
//import '../App.css';
import ImgSlider from "./Carousel";
import Cards from "./cards";
import { populateTrucks } from "../actions/userActions";
import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";

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

  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`http://food-truck-lambda.herokuapp.com/api/trucks`)
      .then((response) => {
        populateTrucks(response.data);
      })
      .catch((error) => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Typography>Home</Typography>
        <Container className={classes.header}>
          <ImgSlider className={classes.image} />
        </Container>
        <Cards />
      </Container>
    </React.Fragment>
  );
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     state,
//   };
// };

export default connect(null, {})(Home);
// export default Home;
