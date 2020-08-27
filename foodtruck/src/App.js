import React, { useState, useEffect }  from "react";
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
import axios from 'axios';
import { useParams } from 'react-router-dom';




function App() {
  const [trucks, setTrucks] = useState([]);
  const params = useParams();

  useEffect(() => {
    const id = params.id;
    const getTrucks = () => {
      axios
        .get(`http://food-truck-lambda.herokuapp.com/api/trucks/`)
        .then(response => {
          setTrucks(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getTrucks();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/tacos" render={() => <Tacos truckMenus={trucks} />} />
        <Route path="/registration" render={() => <Registration />} />
        <Route path="/login" render={() => <LogIn />} />
        <Route path="/korean" render={() => <Korean truckMenus={trucks} />} />
        <Route path="/bbq" render={() => <BBQ truckMenus={trucks} />} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
