import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';
import  ImgSlider from "./Carousel"
import Cards from "./cards"


function Home() {
  return (
      <div className="homeContainer">
        <ImgSlider/>
        <Cards/>
      </div>
    
  );
}

export default Home;