import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';
import  ImgSlider from "./Carousel"



function Home() {
  return (
    <React.Fragment>
      <Container maxWidth="lg" component="div" style={{ backgroundColor: '#eee', height: '100vh' }}>
        <Typography>Home</Typography>
        <ImgSlider/>
      </Container>
    </React.Fragment>
  );
}

export default Home;