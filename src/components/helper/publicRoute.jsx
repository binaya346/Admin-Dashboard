import React from "react";
import { getToken } from "./utils";
import { Route, Redirect } from "react-router-dom";

const PublicRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (getToken()) {
          return (
            <Redirect
              to={{ pathname: "/dashboard", state: { from: props.location } }}
            />
          );
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PublicRouter;
