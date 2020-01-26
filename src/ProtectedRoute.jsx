
import React from "react";
import { Route, Redirect } from "react-router-dom";

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
          <div style={{marginTop: 50}}>Request not verified yet, some loading.</div>
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