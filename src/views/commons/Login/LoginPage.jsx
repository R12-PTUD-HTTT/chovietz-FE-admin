import React from "react";
import style from "./styleLogin.module.css";
import {Link} from "react-router-dom";

function LoginPage(props) {
  return (
    <>
      <main className="main-content  mt-0">
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-4 col-md-8 col-12 mx-auto">
              <div className="card z-index-0 fadeIn3 fadeInBottom">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                      Sign in
                    </h4>
                    <div className="row mt-3">
                      <div className="col-2 text-center ms-auto">
                        <link className="btn btn-link px-3" to="">
                          <i className="fa fa-facebook text-white text-lg"></i>
                        </link>
                      </div>
                      <div className="col-2 text-center px-1">
                        <link className="btn btn-link px-3" to="">
                          <i className="fa fa-github text-white text-lg"></i>
                        </link>
                      </div>
                      <div className="col-2 text-center me-auto">
                        <link className="btn btn-link px-3" to="">
                          <i className="fa fa-google text-white text-lg"></i>
                        </link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form role="form" className="text-start">
                    <div className="input-group input-group-outline my-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-check form-switch d-flex align-items-center mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label mb-0 ms-2"
                        for="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn bg-gradient-primary w-100 my-4 mb-2"
                      >
                        Sign in
                      </button>
                    </div>
                    <p className="mt-4 text-sm text-center">
                      Don't have an account?
                      <link
                        to=""
                        className="text-primary text-gradient font-weight-bold"
                      >
                        Sign up
                      </link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
