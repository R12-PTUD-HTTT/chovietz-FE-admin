import React from "react";
import { Button, Col, Container, Grid, Row } from "react-bootstrap";
import style from "./shop.module.css";
import shipper from "../../../assets/image/shop.jpg";
import { Link } from "react-router-dom";

function ShopServices(props) {
  return (
    <Container className={style.container}>
      <Row>
        <Col md={6}>
          <div className={style.leftContent}>
            <h3 className={style.title}>
              Đăng kí ngay để cùng hợp tác bán hàng với chúng tôi{" "}
            </h3>
            <Link to="/signup/shop">
              <Button variant="success">Đăng ký ngay</Button>
            </Link>
            <div>Bạn đã có tài khoản?
            <Link to="/login">
              <a variant="primary"> Đăng nhập </a>
               
            </Link>
             ngay.
            </div>
            
          </div>
        </Col>
        <Col md={6}>
          <img className={style.shipperImage} src={shipper} alt="" />
        </Col>
      </Row>
    </Container>
  );;
}

export default ShopServices;
