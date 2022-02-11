import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RoleLayout from "./components/Layout/RoleLayout";
import DefaultLayout from "./components/Layout/DefaultLayout";
import adminRoutes from "./routers/adminRoutes";
import RouteWrapper from "./routers/RouterWithRole";
import * as roles from "./constants/roles";
import shopRoutes from "./routers/shopRoutes";
import shipperRoutes from "./routers/shipperRoutes";
import customerRoutes from "./routers/customerRoutes";
import commonRoutes from "./routers/commonRoutes";
import { reloadUserStore } from "./redux/actions/userAction";
import { useDispatch } from "react-redux";

const RenderPage = ({ routes, layout, role, requiredLogin }) => {
  return routes.map((route, index) => (
    <RouteWrapper
      key={index}
      role={role}
      layout={layout}
      requiredLogin={requiredLogin}
      path={route.path}
      exact={route.exact !== undefined ? route.exact : true}
      routeData={route}
      component={route.component}
    />
  ));
};
function App() {
  const dispatch = useDispatch();
  dispatch(reloadUserStore());
  const renderAdminPage = {
    routes: adminRoutes,
    layout: RoleLayout,
    role: roles.admin,
    requiredLogin: true,
  };
  const renderPageShop = {
    routes: shopRoutes,
    layout: RoleLayout,
    role: roles.shop,
    requiredLogin: true,
  };
  const renderPageShipper = {
    routes: shipperRoutes,
    layout: RoleLayout,
    role: roles.shipper,
    requiredLogin: true,
  };
  const renderPageCustomer = {
    routes: customerRoutes,
    layout: RoleLayout,
    role: roles.user,
    requiredLogin: true,
  };
  const renderCommonPage = {
    routes: commonRoutes,
    layout: DefaultLayout,
    role: roles.user,
    requiredLogin: false,
  };
  return (
    <Router>
      <Switch>
        {RenderPage(renderAdminPage)}
        {RenderPage(renderPageShop)}
        {RenderPage(renderPageShipper)}
        {RenderPage(renderPageCustomer)}
        {RenderPage(renderCommonPage)}
      </Switch>
    </Router>
  );
}

export default App;
