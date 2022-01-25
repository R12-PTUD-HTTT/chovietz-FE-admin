import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchShopApply } from "../../../api/userApi";
import style from "./signup.module.css";

import CustomAlert from "../../../components/Alert/CustomAlert";
import Loader from "../../../components/LoaderEffect/Loader";

export default function SignUpShop(props) {
  const history = useHistory();

  const [error, setError] = useState("");
  const [typeAlert, setTypeAlert] = useState("warning");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState({
    hoten: "",
    email: "",
    cmnd: "",
    sdt: "",
    ngaysinh: "",
    diachi: "",
    hopdong: true,
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(data);
    try {
      const response = await fetchShopApply(data);
      history.push('/signup/shop/success');
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
        variant={typeAlert}
      />
      <main>
        <div class="container">
          <div class="cad card m-5">
            <h3 class="text-center mb-4">Đăng ký bán hàng</h3>
            <form class="form-card" onSubmit={handleSubmit}>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3">
                    Họ tên<span class="text-danger"> *</span>
                  </label>
                  <input type="text" name="hoten" onChange={handleChange} placeholder="Nhập họ tên của bạn"></input>
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3">
                    Email<span class="text-danger"> *</span>
                  </label>
                  <input type="text" name="email" onChange={handleChange} placeholder="Nhập email của bạn"></input>
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3">
                    CMND/CCCD<span class="text-danger"> *</span>
                  </label>
                  <input type="text" name="cmnd" onChange={handleChange} placeholder=""></input>
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3">
                    Số điện thoại<span class="text-danger"> *</span>
                  </label>
                  <input type="text" name="sdt" onChange={handleChange} placeholder=""></input>
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3">
                    Ngày sinh<span class="text-danger"> *</span>
                  </label>
                  <input type="text" name="ngaysinh" onChange={handleChange} placeholder="dd/mm/yyyy"></input>
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex">
                  <label class="form-control-label px-3">
                    Địa chỉ<span class="text-danger"> *</span>
                  </label>
                  <input type="text" name="diachi" onChange={handleChange} placeholder=""></input>
                </div>
              </div>
              <div class="row justify-content-between text-center">
                <div class="form-check col-12 p-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="hopdong"
                    value="true"
                    onChange={handleChange}
                    id="invalidCheck"
                    required
                  ></input>
                  <label class="form-check-label">
                    Tôi đồng ý với các <a class="font-weight-bold " href="#" title="Xem Hợp đồng kinh doanh">
                      <u> Điều khoản trong hợp đồng kinh doanh</u>
                    </a>
                  </label>
                </div>
              </div>
              <div class="row justify-content-between text-center ">
                <div class="form-group col-12">
                  <button type="submit" class="btn  btn-success" style={{position: "relative"}} disabled = {loading}>
                    <div class="h5">Sign Up</div>
                    {loading && <Loader />}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}


