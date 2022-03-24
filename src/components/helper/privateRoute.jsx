import React from "react";
import { getToken } from "./utils";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!getToken()) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: "/admin", state: { from: props.location } }}
            />
          );
        }

        // authorized so return component
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
