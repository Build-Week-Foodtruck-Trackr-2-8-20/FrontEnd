import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import '../App.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: "green",
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
    marginTop: '0px'
  },
  
  content: {
    display: 'flex',
    width: "100%",
    height: '100vh',
    padding: '0px'
  },
  left: {
    width: '50%',
    backgroundColor: "blue"
  }, 
  right: {
    width: '50%',
    backgroundColor: "yellow"
  }
});

function Tacos() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
          BBQ
          <Container className={classes.header}>
          <img className={classes.image} src="http://placehold.it/1000x300"
              srcset="
                http://placehold.it/1000x300 300w"
              sizes="
                100vw"
              alt="Placeholder"
          />  
          </Container>
          <Container className={classes.content}>
          <Container className={classes.left}><Typography>Truck</Typography></Container>
          <Container className={classes.right}><Typography>Menu</Typography></Container>
          </Container>
      </Container>
    </React.Fragment>
  );
}

export default Tacos;