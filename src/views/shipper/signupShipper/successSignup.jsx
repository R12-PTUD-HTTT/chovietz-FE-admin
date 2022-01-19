import React from "react";

export default function SuccessSignupShipper(props) {
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
                    </div>
                    <div className="card-body">
                      <h4>Cảm ơn bạn đã gửi đơn đăng ký đến chúng tôi. Chúng tôi sẽ liên hệ và hẹn gặp bạn vào thời điểm sớm nhất. </h4>
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
