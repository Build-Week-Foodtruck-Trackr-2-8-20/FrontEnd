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
import "./App.css";
import PrivateRoute from "./components/privateRoute";

function App() {
  // const [trucks, setTrucks] = useState([]);

  // useEffect(() => {
  //   const getTrucks = () => {
  //     axios
  //       .get(`http://food-truck-lambda.herokuapp.com/api/trucks`)
  //       .then((response) => {
  //         setTrucks(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Server Error", error);
  //       });
  //   };
  //   getTrucks();
  // }, []);

  // console.log("tucks: ", trucks);

  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/tacos" component={Tacos} />
        <PrivateRoute exact path="/korean" component={Korean} />
        <PrivateRoute exact path="/bbq" component={BBQ} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
