import React from "react";
import { Route } from "react-router";

function RouterWithRole({ role, path, Component, ...rest }) {
  //check role here
  return (
    <>
      <Route
        exact
        path={path}
        {...rest}
        render={(props) => {
          <Component {...props} />;
        }}
      />
    </>
  );
}

export default RouterWithRole;
