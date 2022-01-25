import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailOrder, getShipperByWorkArea } from "../../../../api/index";
import { Container, Row, Col } from "react-bootstrap";
import { formatPrice } from "../../../../Utils/orderHelper";
import { selectRole } from "../../../../redux/selectors/userSelector";
import { shipper } from "../../../../constants/roles";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  OrderStatus,
  DELIVERY_FAILED,
  RETURN_ORDER,
  CANCELED,
} from "../../../../constants/order";

function OrderDetail(props) {
  const { id } = useParams();
  const role = useSelector(selectRole);
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>
                  Mã đơn hàng: <b>{order.id?.toUpperCase()}</b>
                </p>
                {role === shipper && (
                  <Link
                    to={
                      order.return_order_id
                        ? `/shipper/return-order/${order.id}/`
                        : `/shipper/return-order/${order.id}/create`
                    }
                  >
                    <Button>Đổi/trả hàng</Button>
                  </Link>
                )}
              </div>
              <p>
                Tình trạng:{" "}
                <b
                  style={{
                    color:
                      order.status?.toUpperCase() === DELIVERY_FAILED.value ||
                      order.status?.toUpperCase() === RETURN_ORDER.value ||
                      order.status?.toUpperCase() === CANCELED.value
                        ? "red"
                        : "green",
                  }}
                >
                  {
                    OrderStatus.find(
                      (item) => item.value === order.status?.toUpperCase()
                    )?.label
                  }
                </b>
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
                        {!(role === shipper) && (
                          <>
                            Giá: {formatPrice(item.price)} x SL: {item.quantity}
                            <br />
                            Thành tiền:{" "}
                            <b style={{ color: "red" }}>
                              <b>{formatPrice(item.price * item.quantity)} </b>
                            </b>{" "}
                            VNĐ
                          </>
                        )}
                        <br />
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
                    {order.is_paid && role === shipper ? (
                      <>
                        <b> 0 </b> VNĐ
                        <b style={{ color: "red" }}> Đã thanh toán</b>
                      </>
                    ) : (
                      <>
                        <b style={{ color: "red" }}>
                          {" "}
                          {formatPrice(order.total_price)}{" "}
                        </b>{" "}
                        VNĐ
                      </>
                    )}
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
