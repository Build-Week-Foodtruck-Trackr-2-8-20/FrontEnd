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
<<<<<<< HEAD
        .get("http://food-truck-lambda.herokuapp.com/api/trucks")
        .then((response) => {
=======
        .get(`http://food-truck-lambda.herokuapp.com/api/trucks?id=2`)
        .then(response => {
>>>>>>> a6be1502529d1a2123ae581ce0ce13ba7800a6d2
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
<<<<<<< HEAD
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/tacos" component={Tacos} />
        <Route exact path="/korean" component={Korean} />
        <Route exact path="/bbq" component={BBQ} />
        {/* <Route exact path="/home" component={Home} /> */}
      </Switch>
      {/* <Switch>
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
      </Switch> */}

      <footer>
        <Footer />
      </footer>
=======
        <Route path="/tacos" render={() => <Tacos truckMenus={trucks} />} />
        <Route path="/registration" render={() => <Registration />} />
        <Route path="/login" render={() => <LogIn />} />
        <Route path="/korean" render={() => <Korean truckMenus={trucks} />} />
        <Route path="/bbq" render={() => <BBQ truckMenus={trucks} />} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
      
>>>>>>> a6be1502529d1a2123ae581ce0ce13ba7800a6d2
    </div>
  );
}

export default App;
