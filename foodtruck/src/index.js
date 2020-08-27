import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import { foodTruckReducer } from "./reducers/foodTruckReducer";
// import { registration } from "./reducers/userRegisterReducer";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
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