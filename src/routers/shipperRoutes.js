import ShipperDashboard from "../views/shipper/Dasboard/ShipperDashboard";
import HistoryDelivery from "../views/shipper/HistoryDelivery";
import NewOrderDelivery from "../views/shipper/NewOrderDelivery";
import ShipperProfile from "../views/shipper/ShipperProfile";

const shipperRoutes = [
  {
    path: "/shipper/dashboard",
    component: () => <ShipperDashboard />,
  },
  {
    path: "/shipper/delivery/new-order",
    component: () => <NewOrderDelivery />,
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
