import Dashboard from "../views/admin/Dashboard/Dashboard";
import LoginPage from "../views/commons/Login/LoginPage";

const routes = [
  {
    path: "/dashboard",
    component: () => <Dashboard />,
    role: ["admin"],
  },
];
export default routes;
