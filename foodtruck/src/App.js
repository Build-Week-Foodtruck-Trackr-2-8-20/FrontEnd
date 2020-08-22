import React from 'react';
import './App.css';
import ImgSlider from './Components/Carousel'
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
     
      <div className="carousel">
        <ImgSlider/>

      </div>
      <footer>
      Log IN
      <Login/>
      </footer>
      
    </div>
  );
}

export default App;
