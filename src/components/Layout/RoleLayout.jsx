import React from "react";
import * as roles from "../../constants/roles";
import AdminSideBar from "./SideBar/AdminSideBar";
import Header from "./Header/Header";
import ShipperSideBar from "./SideBar/ShipperSideBar";
import ShopSideBar from "./SideBar/ShopSideBar";
import Footer from "./Footer/Footer";

function RoleLayout(props) {
  const { role, children } = props;
  return (
    <React.Fragment>
      <div className="g-sidenav-show  bg-gray-200">
        {role === roles.admin && <AdminSideBar />}
        {role === roles.shipper && <ShipperSideBar />}
        {role === roles.shop && <ShopSideBar />}
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          <div className="container-fluid">
            <Header />
            <div className="row">{children}</div>
            <Footer />
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default RoleLayout;
