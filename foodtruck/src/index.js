import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { foodTruckReducer } from "./reducers/foodTruckReducer";
import thunk from "redux-thunk";

const store = createStore(foodTruckReducer, applyMiddleware(thunk)); // do we want to use middleware?

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
