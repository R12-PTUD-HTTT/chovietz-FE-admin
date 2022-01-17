import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Nav } from "react-bootstrap";
import favicon from "../../../assets/image/favicon.png";
function AdminSideBar(props) {
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
                  history.location.pathname.includes("/admin/dashboard")
                    ? "nav-link text-white bg-gradient-primary"
                    : "nav-link text-white "
                }
                to="/admin/dashboard"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </Link>
            </li>
            <Nav.Item className="mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Tài khoản
              </h6>
            </Nav.Item>
            <li className="nav-item">
              <Link
                className={
                  history.location.pathname.includes(
                    "/admin/manage-account/shop"
                  )
                    ? "nav-link text-white bg-gradient-primary"
                    : "nav-link text-white "
                }
                to="/admin/manage-account/shop"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Cửa hàng</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  history.location.pathname.includes(
                    "/admin/manage-account/shipper"
                  )
                    ? "nav-link text-white bg-gradient-primary"
                    : "nav-link text-white "
                }
                to="/admin/manage-account/shipper"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">Shipper</span>
              </Link>
            </li>

            <Nav.Item className="mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Doanh thu
              </h6>
            </Nav.Item>
            <li className="nav-item">
              <Link
                className={
                  history.location.pathname.includes(
                    "/admin/profit/statistical"
                  )
                    ? "nav-link text-white bg-gradient-primary"
                    : "nav-link text-white "
                }
                to="/admin/profit/statistical"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">
                    format_textdirection_r_to_l
                  </i>
                </div>
                <span className="nav-link-text ms-1">Thống kê doanh thu</span>
              </Link>
            </li>
            <Nav.Item className="mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Đối tác
              </h6>
            </Nav.Item>
            <li className="nav-item">
              <Link
                className={
                  history.location.pathname?.includes(
                    "/admin/manage-partners/all"
                  )
                    ? "nav-link text-white bg-gradient-primary"
                    : "nav-link text-white "
                }
                to="/admin/manage-partners/all"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">notifications</i>
                </div>
                <span className="nav-link-text ms-1">Danh sách đối tác</span>{" "}
              </Link>
            </li>
            <Nav.Item className="mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Quản trị viên
              </h6>
            </Nav.Item>
            <li className="nav-item">
              <Link
                className={
                  history.location.pathname?.includes("/admin/account")
                    ? "nav-link text-white bg-gradient-primary"
                    : "nav-link text-white "
                }
                to="/admin/account"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">notifications</i>
                </div>
                <span className="nav-link-text ms-1">Tài khoản</span>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </React.Fragment>
  );
}

export default AdminSideBar;
