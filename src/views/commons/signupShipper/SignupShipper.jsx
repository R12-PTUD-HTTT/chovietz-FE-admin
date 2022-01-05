import React from 'react'

export default function SignupShipper() {
    return (
        <>
            <div className="container position-sticky z-index-sticky top-0">
                <div className="row">
                    <div className="col-12">
                        {/* <!-- Navbar --> */}
                        <nav className="navbar navbar-expand-lg blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-2 start-0 end-0 mx-4">
                            <div className="container-fluid ps-2 pe-0">
                                <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
                                    ChoVietZ
                                </a>
                                <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon mt-2">
                                        <span className="navbar-toggler-bar bar1"></span>
                                        <span className="navbar-toggler-bar bar2"></span>
                                        <span className="navbar-toggler-bar bar3"></span>
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navigation">
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item">
                                            <a className="nav-link d-flex align-items-center me-2 active" aria-current="page" href="../pages/dashboard.html">
                                                <i className="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link me-2" href="../pages/profile.html">
                                                <i className="fa fa-user opacity-6 text-dark me-1"></i>
                                                Profile
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link me-2" href="../pages/sign-up.html">
                                                <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                                Sign Up
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link me-2" href="../pages/sign-in.html">
                                                <i className="fas fa-key opacity-6 text-dark me-1"></i>
                                                Sign In
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav d-lg-block d-none">
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/product/material-dashboard" className="btn btn-sm mb-0 me-1 bg-gradient-dark">Free download</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        {/* <!-- End Navbar --> */}
                    </div>
                </div>
            </div>


            <main className="main-content  mt-0">
                <section>
                    <div className="page-header min-vh-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                                    <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style={{ backgroundImage: `url("/img/illustrations/illustration-signup.jpg")`, backgroundSize: "cover" }}>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                                    <div className="card card-plain">
                                        <div className="card-header">
                                            <h4 className="font-weight-bolder">Đăng ký vận chuyển</h4>
                                            <p className="mb-0">Điền thông tin ứng tuyển của bạn vào đây để đăng ký. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.</p>
                                        </div>
                                        <div className="card-body">
                                            <form role="form">
                                                <div className="input-group input-group-outline mb-3">
                                                    <label className="form-label">Họ tên</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                                <div className="row">
                                                    <label className="form-label">Giới tính</label>
                                                    <div class="form-check mb-3 col">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="customRadio1" />
                                                        <label class="custom-control-label" for="customRadio1">Nam</label>
                                                    </div>
                                                    <div class="form-check col">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="customRadio2" />
                                                        <label class="custom-control-label" for="customRadio2">Nữ</label>
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
                                                    <label for="exampleFormControlSelect1" class="ms-0">Khu vực muốn đăng ký làm việc</label>
                                                    <select class="form-control" id="exampleFormControlSelect1">
                                                        <option>Quận 1</option>
                                                        <option>Quận 2</option>
                                                        <option>Quận 3</option>
                                                        <option>Quận 4</option>
                                                        <option>Quận 5</option>
                                                    </select>
                                                </div>
                                                <div className="text-center">
                                                    <button type="button" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Đăng ký ứng tuyển</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                            <p className="mb-2 text-sm mx-auto">
                                                Bạn đã có tài khoản?
                                                <a href="./login" className="text-primary text-gradient font-weight-bold" style={{ paddingLeft: "1rem" }}>Đăng nhập</a>
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
    )
}
