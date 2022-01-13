import React from "react";
import RouterWithRole from "./RouterWithRole";
import routes from "./routes";

function SecureView(props) {
  return routes.map((route, index) => {
    return (
      <RouterWithRole
        key={index}
        role={route.role}
        component={route.component}
        path={route.path}
        exact
      />
    );
  });
}

export default SecureView;
