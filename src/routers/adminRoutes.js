import AdminAccount from "../views/admin/AdminAccount";
import Dashboard from "../views/admin/Dashboard/Dashboard";
import ManageShipperAccount from "../views/admin/ManageAccount/shipperAccount/ManageShipperAccount";
import ManageShopAccount from "../views/admin/ManageAccount/shopAccount/ManageShopAccount";
import ListPartner from "../views/admin/Partner/ListPartner";
import StatisticalProfit from "../views/admin/Profits/StatisticalProfit";

const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: () => <Dashboard />,
  },
  {
    path: "/admin/manage-account/shop",
    component: () => <ManageShopAccount />,
  },
  {
    path: "/admin/manage-account/shipper",
    component: () => <ManageShipperAccount />,
  },
  {
    path: "/admin/profit/statistical",
    component: () => <StatisticalProfit />,
  },
  {
    path: "/admin/manage-partners/all",
    component: () => <ListPartner />,
  },
  {
    path: "/admin/account",
    component: () => <AdminAccount />,
  },
];
export default adminRoutes;
