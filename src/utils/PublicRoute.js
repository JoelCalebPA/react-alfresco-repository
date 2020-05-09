import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getTicket } from "./Commons";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !getTicket() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/dashboard" }} />
        )
      }
    />
  );
};

export default PublicRoute;
