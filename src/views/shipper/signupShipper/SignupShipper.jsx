import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchShippingForm } from "../../../api/userApi";


import CustomAlert from "../../../components/Alert/CustomAlert";
import Loader from "../../../components/LoaderEffect/Loader";
// import { fetchShippingSignup } from "../../../redux/actions/userAction.js";

export default function SignupShipper(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState({
    fullname: "",
    email: "",
    address: "",
    tel: "",
    work_area: "",
    gender: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetchShippingForm(data);
      console.log("das");
        setError(response);
        setShowAlert(true);
    } catch (err) {
      console.log(err);
      setError("Có lỗi trong quá trình tải, vui lòng thử lại sau!");
      setShowAlert(true);
    }
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
      <main className="main-content  mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                  <div
                    className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                    style={{
                      backgroundImage: `url("/img/illustrations/illustration-signup.jpg")`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                  <div className="card card-plain">
                    <div className="card-header">
                      <h4 className="font-weight-bolder">Đăng ký vận chuyển</h4>
                      <p className="mb-0">
                        Điền thông tin ứng tuyển của bạn vào đây để đăng ký.
                        Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.
                      </p>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Họ tên</label>
                          <input type="text" className="form-control"
                            name="fullname"
                            onChange={handleChange}
                            value={data.fullname || ""} />
                        </div>
                        <div className="row">
                          <label className="form-label">Giới tính</label>
                          <div className="form-check mb-3 col">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="1"
                              value={"1"}
                              checked={data.gender === "1"}
                              onChange={handleChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="1"
                            >
                              Nam
                            </label>
                          </div>
                          <div className="form-check col">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="2"
                              value={"2"}
                              checked={data.gender === "2"}
                              onChange={handleChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="2"
                            >
                              Nữ
                            </label>
                          </div>
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control"
                            name="email"
                            onChange={handleChange}
                            value={data.email || ""} />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Số điện thoại</label>
                          <input type="tel" className="form-control"
                            name="tel"
                            onChange={handleChange}
                            value={data.tel || ""} />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Địa chỉ hiện tại</label>
                          <input type="text" className="form-control"
                            name="address"
                            onChange={handleChange}
                            value={data.address || ""} />
                        </div>
                        <div className="input-group input-group-static mb-4">
                          <label htmlFor="exampleFormControlSelect1" className="ms-0">
                            Khu vực muốn đăng ký làm việc
                          </label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="work_area"
                            onChange={handleChange}
                          >
                            <option value={"Quận 1"}>Quận 1</option>
                            <option value={"Quận 2"}>Quận 2</option>
                            <option value={"Quận 3"}>Quận 3</option>
                            <option value={"Quận 4"}>Quận 4</option>
                            <option value={"Quận 5"}>Quận 5</option>
                          </select>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
                            style={{ position: "relative" }}
                            disabled={loading}
                          >
                            {loading && <Loader />}
                            Đăng ký ứng tuyển
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-2 text-sm mx-auto">
                        Bạn đã có tài khoản?
                        <Link
                          to="/login"
                          className="text-primary text-gradient font-weight-bold"
                          style={{ paddingLeft: "1rem" }}
                        >
                          Đăng nhập
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
