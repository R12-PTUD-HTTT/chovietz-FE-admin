import React from "react";
import HeaderPage from "../components/SideBar/HeaderPage";
import Sidebar from "../components/SideBar/Sidebar";
import RouterWithRole from "./RouterWithRole";
import routes from "./routes";

function SecureView(props) {
  return (
    <div class="g-sidenav-show  bg-gray-200">
      <Sidebar />

      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <div class="container-fluid py-4">
          <HeaderPage />
          <div class="row">
            {routes.map((route, index) => {
              return (
                <RouterWithRole
                  key={index}
                  role={route.role}
                  component={route.component}
                  path={route.path}
                  exact
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default SecureView;
