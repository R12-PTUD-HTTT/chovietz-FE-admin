import CanceledOrder from "../views/shop/Orders/CanceledOrders";
import DeliveredOrder from "../views/shop/Orders/DeliveriedOrder";
import ListNewOrder from "../views/shop/Orders/NewOrders/ListNewOrder";
import StoreProfile from "../views/shop/profile/StoreProfile";
import StoreProfit from "../views/shop/Profit/StoreProfit";
import ShopDashBoard from "../views/shop/ShopDashBoard";


const shopRoutes = [
  { path: "/shop/dashboard", component: () => <ShopDashBoard /> },
  { path: "/shop/orders/new-order", component: () => <ListNewOrder /> },
  { path: "/shop/orders/delivers", component: () => <DeliveredOrder /> },
  { path: "/shop/orders/canceled", component: () => <CanceledOrder /> },
  { path: "/shop/profit", component: () => <StoreProfit /> },
  { path: "/shop/store/profile", component: () => <StoreProfile /> },
];
export default shopRoutes;
