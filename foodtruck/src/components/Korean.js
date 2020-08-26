import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import '../App.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffdb58",
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
  }
});

function Korean() {
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
        <Typography component="div" className={classes.root} />
      </Container>
    </React.Fragment>
  );
}

export default Korean;