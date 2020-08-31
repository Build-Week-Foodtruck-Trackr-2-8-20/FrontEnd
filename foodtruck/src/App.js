import React from "react";
import LogIn from "./components/LogIn";
import Registration from "./components/Registration";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Korean from "./components/Korean";
import BBQ from "./components/BBQ";
import Tacos from "./components/Tacos";
import Home from "./components/Home";
import Profile from "./components/Profile";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/tacos" component={Tacos} />
        <PrivateRoute exact path="/korean" component={Korean} />
        <PrivateRoute exact path="/bbq" component={BBQ} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
