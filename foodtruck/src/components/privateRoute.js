import React from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      //render={props =>...}
      render={() => {
        // fixed error where it wouldn't allow us to access the Home page, by changing "token" to "authToken"
        if (localStorage.getItem("authToken")) {
          //return <Component {...props} />;
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
