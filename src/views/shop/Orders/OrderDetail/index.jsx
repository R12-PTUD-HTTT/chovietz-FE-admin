import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailOrder, getShipperByWorkArea } from "../../../../api/index";
import { Container, Row, Col } from "react-bootstrap";
import { formatPrice } from "../../../../Utils/orderHelper";
function OrderDetail(props) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [shippers, setShippers] = useState([]);
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetchOrders();
  }, []);
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const { data, status } = await getDetailOrder(id);
      if (status === 200) {
        setOrder(data);
        console.log(data);
      }
    } catch {}
    setLoading(false);
  };
  useEffect(() => {
    const fetchShipper = async () => {
      try {
        const filter = {
          city: order.receiver?.city,
          district: order.receiver?.district,
          ward: order.receiver?.ward,
        };
        const { data, status } = await getShipperByWorkArea(filter);
        if (status === 200) {
          setShippers(data.shippers);
          console.log(data);
        }
      } catch {}
    };
    order.receiver && fetchShipper();
  }, [order]);
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              className="card"
              style={{ padding: "10px 20px", minHeight: "80vh" }}
            >
              <p>
                Mã đơn hàng: <b>{order.id?.toUpperCase()}</b>
              </p>
              <p>
                Khách hàng: <b>{order.customer?.username}</b>
              </p>
              <h6>Người nhận:</h6>
              <p>
                Họ tên: <b>{order.receiver?.name}</b>
              </p>
              <p>
                Số điện thoại: <b>{order.receiver?.phone_number}</b>
              </p>
              <p>
                Địa chỉ:{" "}
                <b>
                  {order.receiver?.address}, {order.receiver?.ward},{" "}
                  {order.receiver?.district},{order.receiver?.city}
                </b>
              </p>
              <h6>Thông tin đơn hàng:</h6>
              {order.product?.map((item, index) => (
                <div key={index} style={{ borderBottom: "1px solid #ccc" }}>
                  <Container>
                    <Row>
                      <Col xs={2}>
                        <img
                          src={item.image_link}
                          alt="product"
                          style={{ width: "100px" }}
                        />
                      </Col>
                      <Col xs={5}>Tên sản phẩm: {item.name}</Col>
                      <Col xs={5}>
                        Giá: {formatPrice(item.price)} x SL: {item.quantity}
                        <br />
                        Thành tiền:{" "}
                        <b> {formatPrice(item.price * item.quantity)} </b>
                        VNĐ
                      </Col>
                    </Row>
                  </Container>
                </div>
              ))}
              <Container>
                <Row>
                  <Col xs={2}></Col>
                  <Col xs={5}></Col>
                  <Col xs={5}>
                    Tổng hóa đơn:
                    <b style={{ color: "red" }}> {order.total_price} </b>
                    VNĐ
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OrderDetail;
