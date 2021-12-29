import Dashboard from "../views/admin/Dashboard/Dashboard";
import OrderManagementPage from "../views/shop/Order/OrderManagement/OrderManagementPage";

const routes = [
  {
    path: "/dashboard",
    component: () => <Dashboard />,
    role: ["admin"],
  },
  {
    path: "/shop/order",
    component: () => <OrderManagementPage />,
    role: ["shop"],
  },
];
export default routes;
