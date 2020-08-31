import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import ImgSlider from "./Carousel";
import Cards from "./cards";
import { connect, useDispatch } from "react-redux";
import { axiosWithAuth } from "./axiosWithAuth";
import { getTrucks } from "../actions/userActions";

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

function Home(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    axiosWithAuth()
      .get("/api/trucks")
      .then((res) => {
        console.log("Home: firing");
        dispatch(getTrucks(res.data));
      })
      .catch((err) => console.log("Server error", err));
  }, [props.login.loggedIn]);

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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    trucks: state.trucks,
    login: state.login,
  };
};

export default connect(mapStateToProps, { getTrucks })(Home);
