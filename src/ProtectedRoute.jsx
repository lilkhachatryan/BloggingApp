import React from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "./components/common/Loading";

const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    isVerifying,
    ...rest
  }) => (
    <Route
      {...rest}
      render = { props =>
        isVerifying ? (
          <Loading />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
  export default ProtectedRoute;