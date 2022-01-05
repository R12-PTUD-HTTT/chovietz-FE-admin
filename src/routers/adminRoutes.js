import Dashboard from "../views/admin/Dashboard/Dashboard";

const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: () => <Dashboard />,
  },
];
export default adminRoutes;
