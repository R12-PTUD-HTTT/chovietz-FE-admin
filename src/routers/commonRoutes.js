import HomePage from "../views/commons/home/HomePage.jsx";
import NotFoundPage from "../views/commons/Error/NotFoundPage.jsx";
import Denied from "../views/commons/Error/Denied.jsx";
import LoginPage from "../views/commons/Login/LoginPage.jsx";

const commonRoutes = [
  {
    path: "/",
    component: () => <HomePage />,
  },
  {
    path: "/login",
    component: () => <LoginPage />,
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
