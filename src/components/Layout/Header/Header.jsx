import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPageHeader } from "../../../redux/selectors/page/pageSelector";
import { removeStoredUser } from "../../../redux/actions/userAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header({}) {
  const pageTitle = useSelector(selectPageHeader);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(removeStoredUser());
    history.push("/");
  };
  return (
    <React.Fragment>
      <nav
        className="
          navbar navbar-main navbar-expand-lg
          px-0
          mx-4
          shadow-none
          border-radius-xl
        "
        id="navbarBlur"
        navbar-scroll="true"
      >
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm">
                <p className="opacity-5 text-dark" to="">
                  Pages
                </p>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                {pageTitle}
              </li>
            </ol>
            <h6 className="font-weight-bolder mb-0">{pageTitle}</h6>
          </nav>
          <div
            className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item d-flex align-items-center">
                <Link
                  to=""
                  className="nav-link text-body font-weight-bold px-0"
                >
                  <span className="d-sm-inline d-none" onClick={handleLogout}>
                    Thoát
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
