import React from "react";
import style from "./SignUp.module.css";

const SignUpPage = () => {
  return (
    <>
      <main>
        <div class="container">
          <div class="cad card m-5">
            <h3 class="text-center mb-4">Đăng ký bán hàng</h3>
            <form class="form-card" onsubmit="event.preventDefault()">
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3">
                    Họ tên<span class="text-danger"> *</span>
                  </label>
                  <input type="text" placeholder="Nhập họ tên của bạn"></input>
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3">
                    Email<span class="text-danger"> *</span>
                  </label>
                  <input type="text" placeholder="Nhập email của bạn"></input>
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3">
                    CMND/CCCD<span class="text-danger"> *</span>
                  </label>
                  <input type="text" placeholder=""></input>
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3">
                    Số điện thoại<span class="text-danger"> *</span>
                  </label>
                  <input type="text" placeholder=""></input>
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3">
                    Ngày sinh<span class="text-danger"> *</span>
                  </label>
                  <input type="text" placeholder="dd/mm/yyyy"></input>
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex">
                  <label class="form-control-label px-3">
                    Địa chỉ<span class="text-danger"> *</span>
                  </label>
                  <input type="text" placeholder=""></input>
                </div>
              </div>
              <div class="row justify-content-between text-center">
                <div class="form-check col-12 p-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  ></input>
                  <label class="form-check-label">
                    Tôi đồng ý với các{" "}
                    <a class="font-weight-bold " href="#" title="Xem Hợp đồng kinh doanh">
                      <u>Điều khoản trong hợp đồng kinh doanh</u>
                    </a>
                  </label>
                </div>
              </div>
              <div class="row justify-content-between text-center ">
                <div class="form-group col-12">
                  <button type="submit" class="btn  btn-success">
                    <div class="h5">Sign Up</div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUpPage;
