import React from "react";
import { Button, Col, Container, Grid, Row } from "react-bootstrap";
import style from "./style.module.css";
import shipper from "../../../assets/image/shipper.jpg";
import { Link } from "react-router-dom";

function ShipperServices(props) {
  return (
    <Container className={style.container}>
      <Row>
        <Col md={6}>
          <div className={style.leftContent}>
            <h3 className={style.title}>
              Đăng kí ngay để tham gia vào đội ngũ giao hàng của chúng tôi{" "}
            </h3>
            <Link to="/signup/shipper">
              <Button variant="success">Đăng ký ngay</Button>
            </Link>
          </div>
        </Col>
        <Col md={6}>
          <img className={style.shipperImage} src={shipper} alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default ShipperServices;
