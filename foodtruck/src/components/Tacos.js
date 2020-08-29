import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import tacoImg from "../images/xavier-crook-wIqpmuOloVA-unsplash.jpg";
import "../App.css";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    backgroundColor: "green",
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
    marginBottom: "0px",
  },
  content: {
    display: "flex",
    width: "100%",
    height: "100vh",
    padding: "0px",
  },
  left: {
    width: "50%",
    backgroundColor: "blue",
  },
  right: {
    width: "50%",
    backgroundColor: "yellow",
  },
});

function Tacos(props) {
  const classes = useStyles();
  const { truckMenus } = props;
  console.log(truckMenus)

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        BBQ
        <Container className={classes.header}>
          <img className={classes.image} src={tacoImg} alt="Placeholder" />
        </Container>
        <Container className={classes.content}>
          <Container className={classes.left}>
            <Typography>Truck</Typography>
            {props.trucks.map((truck) => {
              if (truck.cuisineType === "Mexican" || truck.cuisineType === "") {
                return (
                  <div key={truck.id}>
                    <img src={truck.imageURL} />
                    <p>Cuisine</p>
                    <div>{truck.cuisineType}</div>
                    {/* <p>Departure Time</p>
                    <div>{truckMenu.departureTime}</div>
                    <p>Rating</p>
                    <div>{truckMenu.customerRatingAvg} stars</div> */}
                    <p>Location</p>
                    <div>{truck.location}</div>
                  </div>
                );
              }
            })}
          </Container>
          <Container className={classes.right}>
            <Typography>Menu</Typography>
          </Container>
        </Container>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    trucks: state.trucks,
  };
};

export default connect(mapStateToProps, {})(Tacos);
