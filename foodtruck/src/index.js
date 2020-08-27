import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom"; // found article on stack overflow that said I should use Router instead of BrowserRouter as Router
import { Router } from "react-router-dom"; // this was supposed to fix the url change not being recognized by React router
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import { foodTruckReducer } from "./reducers/foodTruckReducer";
// import { registration } from "./reducers/userRegisterReducer";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/index";
import history from "./helpers/history";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    {/* this was supposed to fix the url change not being recognized by React router */}
    <Router history={history}>
      <App />
    </Router>
    {/* {" "} --> this was directly after Router, idk why */}
  </Provider>,
  document.getElementById("root")
);

// const allStuff = document.querySelector('img')
//    allStuff.addEventListener("mouseenter", event => {
//     allStuff.style.transform = "scale(1.1)";
//   });

//   allStuff.addEventListener("mouseleave", event => {
//     allStuff.style.transform = "scale(1)";
//   });
