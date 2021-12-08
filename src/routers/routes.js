import LoginPage from "../views/commons/Login/LoginPage";

const routes = [
  {
    path: "/login",
    component: () => <LoginPage />,
    role: ["admin"],
  },
];
export default routes;
