import HomePage from "../views/commons/home/HomePage.jsx";
import NotFoundPage from "../views/commons/Error/NotFoundPage.jsx";
import Denied from "../views/commons/Error/Denied.jsx";
import LoginPage from "../views/commons/Login/LoginPage.jsx";
import SignupShipper from "../views/shipper/signupShipper/SignupShipper.jsx";
import SuccessSignupShipper from "../views/shipper/signupShipper/successSignup.jsx";

import SignUpShop from "../views/shop/SignUp/SignUp";
import SuccessSignupShop from "../views/shop/SignUp/successSignupShop.jsx";

import ShopStore from "../views/shop/ShopStore/Store.jsx";
import ShopAddProduct from "../views/shop/AddProduct/AddProduct.jsx";
import SuccessAddProduct from "../views/shop/AddProduct/AddProductSuccess.jsx";

import ShipperServices from "../views/commons/ShipperServices.jsx/index.jsx";
import ShopServices from "../views/commons/ShopServices/index.jsx";

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
    path: "/signup/shipper/success",
    component: () => <SuccessSignupShipper />,
  },
  {
    path: "/signup/shop",
    component: () => <SignUpShop />,
    redirectWhenLogined: true,
  },
  {
    path: "/signup/shop/success",
    component: () => <SuccessSignupShop />,
  },
  {

    path: "/shop/store",
    component: () => <ShopStore />,
  },
  {

    path: "/shop/add/product",
    component: () => <ShopAddProduct />,
  },
  {
    path: "/shop/add/product/success",
    component: () => <SuccessAddProduct />,
  },
  {
    path: "/delivery",
    component: () => <ShipperServices />,
    redirectWhenLogined: true,
  },
  {
    path: "/shop",
    component: () => <ShopServices />,

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
