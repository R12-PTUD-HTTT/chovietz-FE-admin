import React from "react";
import { Link } from "react-router-dom";

export default function SignupShipper() {
  return (
    <>
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
                      <form>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Họ tên</label>
                          <input type="text" class="form-control" />
                        </div>
                        <div className="row">
                          <label className="form-label">Giới tính</label>
                          <div class="form-check mb-3 col">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="customRadio1"
                            />
                            <label
                              class="custom-control-label"
                              for="customRadio1"
                            >
                              Nam
                            </label>
                          </div>
                          <div class="form-check col">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="customRadio2"
                            />
                            <label
                              class="custom-control-label"
                              for="customRadio2"
                            >
                              Nữ
                            </label>
                          </div>
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Email</label>
                          <input type="email" class="form-control" />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Số điện thoại</label>
                          <input type="tel" class="form-control" />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Địa chỉ hiện tại</label>
                          <input type="text" class="form-control" />
                        </div>
                        <div class="input-group input-group-static mb-4">
                          <label for="exampleFormControlSelect1" class="ms-0">
                            Khu vực muốn đăng ký làm việc
                          </label>
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>Quận 1</option>
                            <option>Quận 2</option>
                            <option>Quận 3</option>
                            <option>Quận 4</option>
                            <option>Quận 5</option>
                          </select>
                        </div>
                        <div className="text-center">
                          <button
                            type="button"
                            class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
                          >
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
