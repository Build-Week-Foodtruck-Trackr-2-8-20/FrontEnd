import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
//import '../App.css';
//import  ImgSlider from "./Carousel"
//import Cards from "./cards"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#eee",
    margin: "10px auto",
    padding: "10px",
    width: "100%",
    height: "100vh",
  },
  header: {
    margin: "50px auto 5px",
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
        <Typography> Home </Typography>{" "}
        <Container className={classes.header}>
          <img
            className={classes.image}
            src="http://placehold.it/1000x300"
            srcset="
    http: //placehold.it/1000x300 300w"
            sizes="
    100 vw "
            alt="Placeholder"
          />
        </Container>{" "}
      </Container>{" "}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state,
  };
};

// export default connect(mapStateToProps, {})(Home);
export default Home;
