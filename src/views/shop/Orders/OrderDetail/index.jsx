import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getDetailOrder,
  getShipperByWorkArea,
  updateShipperOfOrder,
} from "../../../../api";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
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
  TYPE_CANCELED_ORDER,
  TYPE_FINISHED_ORDER,
  TYPE_NEW_ORDER,
  WAIT_PAYMENT,
} from "../../../../constants/order";
import * as Role from "../../../../constants/roles.js";
import { updateOrderStatus } from "../../../../api";
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
          console.log("shipper", data);
        }
      } catch {}
    };
    order.receiver && fetchShipper();
  }, [order]);
  const handleChaneStatus = async (newIdStatus) => {
    const currentStatus = OrderStatus.find(
      (item) => item.value === order.status.toLocaleUpperCase()
    );
    if (!currentStatus?.id || currentStatus.id >= newIdStatus) {
      return;
    }

    const changeStatus = OrderStatus.find((item) => item.id === newIdStatus);
    try {
      const { status } = await updateOrderStatus(order.id, {
        return_order_id: order.return_order_id || null,
        status: changeStatus.value,
        typeOrder:
          changeStatus.value === CANCELED.value
            ? TYPE_CANCELED_ORDER
            : changeStatus.id > 5
            ? TYPE_FINISHED_ORDER
            : TYPE_NEW_ORDER,
      });
      if (status === 200) {
        setOrder({ ...order, status: changeStatus.value });
      }
    } catch (error) {
      alert(error);
    }
  };
  const handleChaneShipper = async (shipper) => {
    try {
      const { status } = await updateShipperOfOrder(order.id, shipper);
      if (status === 200) {
        setOrder({ ...order, shipper: shipper });
      }
    } catch (error) {}
  };
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              className="card"
              style={{ padding: "20px 30px", minHeight: "80vh" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>
                  Mã đơn hàng: <b>{order.id?.toUpperCase()}</b>
                </p>
                <div className="buy d-flex justify-content-between align-items-center">
                  <Dropdown size="sm">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <span>
                        {OrderStatus.find((item) => item.value === order.status)
                          ?.label || "NONE"}
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {OrderStatus.map((status) => {
                        let id = OrderStatus.find(
                          (item) => item.value === order.status
                        )?.id;
                        return status.id <= id ? (
                          <>
                            <Dropdown.Item
                              key={status.id}
                              value={status.id}
                              onClick={() => {
                                handleChaneStatus(order, status.id);
                              }}
                              disabled={true}
                            >
                              <s> {status.label}</s>
                            </Dropdown.Item>
                          </>
                        ) : (
                          <Dropdown.Item
                            key={status.id}
                            value={status.id}
                            onClick={() => {
                              handleChaneStatus(status.id);
                            }}
                          >
                            <b>{status.label}</b>
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                  {role === shipper && !order.return_order_id && (
                    <Link to={`/shipper/return-order/${order.id}/create`}>
                      <Button>Đổi/trả hàng</Button>
                    </Link>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <p style={{ marginRight: "10px" }}>Shipper:</p>
                {role === Role.shipper ? (
                  <>{order.shipper?.name}</>
                ) : (
                  <Dropdown size="sm">
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      style={{ padding: "5px 15px", fontSize: "8pt" }}
                      disabled={order.status === WAIT_PAYMENT.value}
                    >
                      <span>
                        {shippers.find((item) => item.id === order.shipper?.id)
                          ?.name || "---"}
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {shippers.map((shipper) => (
                        <Dropdown.Item
                          key={shipper.id}
                          onClick={() => {
                            handleChaneShipper(shipper);
                          }}
                        >
                          {shipper.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
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
                {"  "}
                {order.return_order_id !== null && (
                  <Link to={`/${role}/return-order/${order.return_order_id}/`}>
                    Xem
                  </Link>
                )}
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
                  {order.receiver?.street}, {order.receiver?.ward},{" "}
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
