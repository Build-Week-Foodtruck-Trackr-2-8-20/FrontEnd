import React, { useState, useEffect } from "react";
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
import axios from "axios";
import PrivateRoute from "./components/privateRoute";

function App() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    const getTrucks = () => {
      axios
        .get(`http://food-truck-lambda.herokuapp.com/api/trucks?id=2`)
        .then((response) => {
          console.log(response);
          setTrucks(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getTrucks();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/tacos">
          <Tacos truckMenu={trucks} />
        </Route>
        <Route exact path="/korean">
          <Korean truckMenu={trucks} />
        </Route>
        <Route exact path="/bbq">
          <BBQ truckMenu={trucks} />
        </Route>
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={LogIn} />
        {/* <Route exact path="/home" component={Home} /> */}
      </Switch>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

/* <Switch>
        <Route
          exact
          path="/tacos"
          render={() => <Tacos truckMenu={trucks} />}
        />
        <Route exact path="/registration" render={() => <Registration />} />
        <Route exact path="/login" render={() => <LogIn />} />
        <Route
          exact
          path="/korean"
          render={() => <Korean truckMenu={trucks} />}
        />
        <Route exact path="/bbq" render={() => <BBQ truckMenu={trucks} />} />
        <Route exact path="/home" component={Home} />
      </Switch> */
