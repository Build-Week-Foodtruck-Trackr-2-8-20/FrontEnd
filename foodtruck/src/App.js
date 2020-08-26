import React from "react";
//import ImgSlider from './Components/Carousel'
import LogIn from "./components/LogIn";
import Registration from "./components/Registration";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Korean from "./components/Korean";
import BBQ from "./components/BBQ";
import Tacos from "./components/Tacos";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/tacos" render={() => <Tacos />} />
        <Route path="/registration" render={() => <Registration />} />
        <Route path="/login" render={() => <LogIn />} />
        <Route path="/korean" render={() => <Korean />} />
        <Route path="/bbq" render={() => <BBQ />} />
        <Route path="/" component={Home} />
      </Switch>

      <div>
       
      </div>

      <Footer />
    </div>
  );
}

export default App;
