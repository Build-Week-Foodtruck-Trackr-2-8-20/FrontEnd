import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { foodTruckReducer } from "./reducer/foodTruckReducer";

const store = createStore(foodTruckReducer); // do we want to use middleware?


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
