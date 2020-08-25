import ImgSlider from "./Components/Carousel";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Korean from "./Components/Korean";
import BBQ from "./Components/BBQ";
import Tacos from "./Components/Tacos";
import Home from "./Components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/korean" render={() => <Korean />} />
        <Route path="/bbq" render={() => <BBQ />} />
        <Route path="/tacos" render={() => <Tacos />} />
        <Route path="/" component={Home} />
      </Switch>
      <div>
        <ImgSlider />
      </div>
      <Footer />
    </div>
  );
}

export default App;
