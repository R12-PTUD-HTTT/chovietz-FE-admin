import React from "react";
import { Route } from "react-router";

function RouterWithRole({ role, component: Component, ...rest }) {
  //check role here
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          <Component {...props} />;
        }}
      />
    </>
  );
}

export default RouterWithRole;
