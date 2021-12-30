import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import { selectIsLogin, selectRole } from "../redux/selectors/userSelector";
import * as roles from "../constants/roles";

function RouteWrapper({
  role,
  path,
  exact,
  requireLogin,
  layout: Layout,
  component: Component,
  ...rest
}) {
  //check role here
  const isLogin = useSelector(selectIsLogin);
  const roleUser = useSelector(selectRole);

  if (requireLogin && !isLogin) {
    return <Redirect to="/login" />;
  }

  if (role !== roleUser && role !== roles.user) {
    return <Redirect to="/denied" />;
  }
  return (
    <>
      <Route
        exact={exact}
        path={path}
        render={(props) => (
          <Layout role={role}>
            <Component {...props} />
          </Layout>
        )}
      />
    </>
  );
}

export default RouteWrapper;
