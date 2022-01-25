import ShipperDashboard from "../views/shipper/Dasboard/ShipperDashboard";
import HistoryDelivery from "../views/shipper/HistoryDelivery";
import NewOrderDelivery from "../views/shipper/NewOrderDelivery";
import ShipperProfile from "../views/shipper/ShipperProfile";
import OrderDetail from "../views/shop/Orders/OrderDetail";
import ReturnOrder from "../views/shipper/ReturnOrder";
import ViewReturnOrder from "../views/shipper/ReturnOrder/ViewReturnOrder";

const shipperRoutes = [
  {
    path: "/shipper/dashboard",
    component: () => <ShipperDashboard />,
  },
  {
    path: "/shipper/delivery/new-order",
    component: () => <NewOrderDelivery />,
  },
  { path: "/shipper/delivery/:id/detail", component: () => <OrderDetail /> },
  {
    path: "/shipper/return-order/:id/create",
    component: () => <ReturnOrder />,
  },
  {
    path: "/shipper/return-order/:id",
    component: () => <ViewReturnOrder />,
  },
  {
    path: "/shipper/delivery/history",
    component: () => <HistoryDelivery />,
  },
  {
    path: "/shipper/profile",
    component: () => <ShipperProfile />,
  },
];
export default shipperRoutes;
