import ViewReturnOrder from "../views/shipper/ReturnOrder/ViewReturnOrder";
import CanceledOrder from "../views/shop/Orders/CanceledOrders";
import DeliveredOrder from "../views/shop/Orders/DeliveriedOrder";
import ListNewOrder from "../views/shop/Orders/NewOrders/ListNewOrder";
import OrderDetail from "../views/shop/Orders/OrderDetail";
import StoreProfile from "../views/shop/profile/StoreProfile";
import StoreProfit from "../views/shop/Profit/StoreProfit";
import ShopDashBoard from "../views/shop/ShopDashBoard";

const shopRoutes = [
  { path: "/shop/dashboard", component: () => <ShopDashBoard /> },
  { path: "/shop/orders/new-order", component: () => <ListNewOrder /> },
  { path: "/shop/orders/:id/detail", component: () => <OrderDetail /> },
  {
    path: "/shop/orders/delivers",
    component: () => <DeliveredOrder />,
    exact: true,
  },
  {
    path: "/shop/return-order/:id",
    component: () => <ViewReturnOrder />,
  },
  {
    path: "/shop/orders/canceled",
    component: () => <CanceledOrder />,
    exact: true,
  },
  { path: "/shop/profit", component: () => <StoreProfit /> },
  { path: "/shop/store/profile", component: () => <StoreProfile /> },
];
export default shopRoutes;
