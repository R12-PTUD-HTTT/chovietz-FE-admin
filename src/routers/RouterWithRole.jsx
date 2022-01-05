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
  requiredLogin,
  routeData,
  layout: Layout,
  component: Component,
}) {
  //check role here
  const isLogin = useSelector(selectIsLogin);
  const roleUser = useSelector(selectRole);

  if (requiredLogin && !isLogin) {
    return <Redirect to="/login" />;
  }
  console.log(role, roleUser, requiredLogin);
  if (role !== roleUser && role !== roles.user) {
    return <Redirect to="/denied" />;
  }
  if (isLogin && routeData.redirectWhenLogined) {
    return <Redirect to={`/${roleUser}/dashboard`} />;
  }
  return (
    <Route>
      <Route
        exact={exact}
        path={path}
        render={(props) => (
          <Layout role={role}>
            <Component {...props} />
          </Layout>
        )}
      />
    </Route>
  );
}

export default RouteWrapper;
