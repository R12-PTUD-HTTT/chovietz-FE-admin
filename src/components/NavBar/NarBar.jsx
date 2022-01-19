import React from "react";
import { Link } from "react-router-dom";

function HomeNavBar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link cat"
                  data-toggle="dropdown"
                  to="#"
                  aria-expanded="false"
                >
                  <strong>&nbsp; Shop By Category</strong>
                </Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="index.html">
                  Home
                </Link>
              </li>
              
              
              <li className="nav-item">
                <Link className="nav-link" to="/signup/shop">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomeNavBar;