import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Nav } from "react-bootstrap";
import favicon from "../../../assets/image/favicon.png";
function ShipperSideBar(props) {
  const history = useHistory();
  return (
    <React.Fragment>
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 fixed-start bg-gradient-dark"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <Link className="navbar-brand m-0" to="" target="_blank">
            <img
              src={favicon}
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span className="ms-1 font-weight-bold text-white">CHOVIETZ</span>
          </Link>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div
          className="collapse navbar-collapse  w-auto  max-height-vh-100"
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={
                  history.location.pathname.includes("/shipper/dashboard")
                    ? "nav-link text-white bg-gradient-primary"
                    : "nav-link text-white "
                }
                to="/shipper/dashboard"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </Link>
            </li>
            <Nav.Item className="mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Đơn hàng
              </h6>
            </Nav.Item>
            <li className="nav-item">
              <Link
                className={
                  history.location.pathname.includes(
                    "/shipper/delivery/new-order"
                  )
                    ? "nav-link text-white bg-gradient-primary"
                    : "nav-link text-white "
                }
                to="/shipper/delivery/new-order"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Giao hàng mới</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  history.location.pathname.includes(
                    "/shipper/delivery/history"
                  )
                    ? "nav-link text-white bg-gradient-primary"
                    : "nav-link text-white "
                }
                to="/shipper/delivery/history"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">Lịch sử giao hàng</span>
              </Link>
            </li>

            <Nav.Item className="mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Cá nhân
              </h6>
            </Nav.Item>
            <li className="nav-item">
              <Link
                className={
                  history.location.pathname?.includes("/shipper/profile")
                    ? "nav-link text-white bg-gradient-primary"
                    : "nav-link text-white "
                }
                to="/shipper/profile"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">notifications</i>
                </div>
                <span className="nav-link-text ms-1">Thông tin shipper</span>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </React.Fragment>
  );
}

export default ShipperSideBar;
