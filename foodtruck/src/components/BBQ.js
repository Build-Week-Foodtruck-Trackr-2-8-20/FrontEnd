import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import bbqImg from '../images/jose-ignacio-pompe-s-Z-h0fEiBM-unsplash.jpg'

const useStyles = makeStyles({
  root: {
    backgroundColor: "#8B4513",
    margin: "10px auto",
    padding: "10px",
    width: "100%",
    height: '100vh'
  }, 
  header: {
    margin: '50px auto 5px',
    padding: '0px'
  }, 
  image: {
    width: '100%', 
    borderRadius: '0px', 
    marginTop: '0px',
    marginBottom: '0px'
  },
  content: {
    display: 'flex',
    width: "100%",
    height: '100vh',
    padding: '0px'
  },
  left: {
    width: '50%',
    backgroundColor: "green"
  }, 
  right: {
    width: '50%',
    backgroundColor: "yellow"
  }
});

function BBQ(props) {
  const classes = useStyles();
  const { truckMenus } = props;

  return (
    <React.Fragment>
      <Container maxWidth="lg">
          BBQ
          <Container className={classes.header}>
          <img className={classes.image} src={bbqImg}
              alt="Placeholder"
          />  
          </Container>
        <Container className={classes.content}>
          <Container className={classes.left}>
            <Typography>Truck</Typography>
            {truckMenus.map(truckMenu => (
                <div key={truckMenu.id}>
                  <p>Cuisine</p>
                  <div>{truckMenu.cuisineType}</div>
                  <p>Departure Time</p>
                  <div>{truckMenu.departureTime}</div>
                  <p>Rating</p>
                  <div>{truckMenu.customerRatingAvg} stars</div>
                  <p>Location</p>
                  <div>{truckMenu.location} stars</div>
                </div>
            ))}
          </Container>
          <Container className={classes.right}><Typography>Menu</Typography></Container>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default BBQ;