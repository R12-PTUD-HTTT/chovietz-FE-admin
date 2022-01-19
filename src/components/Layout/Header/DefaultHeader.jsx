import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { setPageHeder } from "../../../redux/actions/pageAction";
import favicon from "../../../assets/image/favicon.png";
import { Link } from "react-router-dom";

function DefaultHeader(props) {
  setPageHeder("Dashboard");
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "#fff" }}>
            <img
              src={favicon}
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
            ChoVietZ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link style={{ color: "#fafafa" }} to="/">
                  Trang chủ
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ color: "#fafafa" }} to="/shop">
                  Cửa hàng
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ color: "#fafafa" }} to="/delivery">
                  Vận chuyển
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ color: "#fafafa" }} to="/about-us">
                  Giới thiệu
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ color: "#fafafa" }} to="/privacy">
                  Chính sách - Điều khoản
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link style={{ color: "#fafafa" }} to="/login">
                  Đăng nhập
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DefaultHeader;
