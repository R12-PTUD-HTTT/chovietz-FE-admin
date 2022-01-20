import HomePage from "../views/commons/home/HomePage.jsx";
import NotFoundPage from "../views/commons/Error/NotFoundPage.jsx";
import Denied from "../views/commons/Error/Denied.jsx";
import LoginPage from "../views/commons/Login/LoginPage.jsx";
import SignupShipper from "../views/shipper/signupShipper/SignupShipper.jsx";
import SignUpShop from "../views/shop/SignUp/SignUp";
import ShopStore from "../views/shop/ShopStore/Store.jsx";

const commonRoutes = [
  {
    path: "/",
    component: () => <HomePage />,
    redirectWhenLogined: true,
  },
  {
    path: "/login",
    component: () => <LoginPage />,
    redirectWhenLogined: true,
  },
  {
    path: "/signup/shipper",
    component: () => <SignupShipper />,
    redirectWhenLogined: true,
  },
  {
    path: "/signup/shop",
    component: () => <SignUpShop />,
    redirectWhenLogined: true,
  },
  {
    path: "/shop/store",
    component: () => <ShopStore />,
    redirectWhenLogined: true,
  },
  {
    path: "/denied",
    component: () => <Denied />,
  },
  {
    path: "/",
    component: () => <NotFoundPage />,
    exact: false,
  },
];
export default commonRoutes;
