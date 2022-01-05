import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import CustomAlert from "../../../components/Alert/CustomAlert";
import Loader from "../../../components/LoaderEffect/Loader";
import { fetchUserLogin } from "../../../redux/actions/userAction.js";

function LoginPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    dispatch(
      fetchUserLogin(
        data,
        ({ userRole }) => {
          history.push(`/${userRole}/dashboard`);
        },
        (message) => {
          setError(message);
          setShowAlert(true);
        }
      )
    );
    setLoading(false);
  };
  return (
    <>
      <CustomAlert
        message={error}
        isShow={showAlert}
        onClose={setShowAlert}
        variant="warning"
      />
      <main className="main-content  mt-5">
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
                        <Link className="btn btn-Link px-3" to="">
                          <i className="fa fa-facebook text-white text-lg"></i>
                        </Link>
                      </div>
                      <div className="col-2 text-center px-1">
                        <Link className="btn btn-Link px-3" to="">
                          <i className="fa fa-github text-white text-lg"></i>
                        </Link>
                      </div>
                      <div className="col-2 text-center me-auto">
                        <Link className="btn btn-Link px-3" to="">
                          <i className="fa fa-google text-white text-lg"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form className="text-start" onSubmit={handleSubmitLogin}>
                    <div className="input-group input-group-outline my-3">
                      <input
                        name="username"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Enter your username"
                        value={data.username || ""}
                      />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        value={data.password || ""}
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="form-check form-switch d-flex align-items-center mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label mb-0 ms-2"
                        htmlFor="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn bg-gradient-primary w-100 my-4 mb-2"
                        type="submit"
                        style={{ position: "relative" }}
                        disabled={loading}
                      >
                        {loading && <Loader />}
                        Sign in
                      </button>
                    </div>
                    <p className="mt-4 text-sm text-center">
                      Don't have an account?
                      <Link
                        to=""
                        className="text-primary text-gradient font-weight-bold"
                      >
                        Sign up
                      </Link>
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
