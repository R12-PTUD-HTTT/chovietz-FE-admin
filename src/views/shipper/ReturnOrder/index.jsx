import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form } from "react-bootstrap";
import moment from "moment";
import { Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { setPageHeder } from "../../../redux/actions/pageAction";
import { selectUserId } from "../../../redux/selectors/userSelector";
import { getShipperInfor, updateOrderAfterReturn } from "../../../api";
import { getDetailOrder, requestReturnOrder } from "../../../api";
import { RETURN_ORDER, TYPE_FINISHED_ORDER } from "../../../constants/order";

const returnOrderTemplate = {
  shipper: {},
  order: {},
  product_return: [],
  reason: "",
};

function ReturnOrder() {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Đổi trả hàng"));
  const [returnOrder, setReturnOrder] = useState(returnOrderTemplate);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true);
        let { data, status } = await getDetailOrder(id);
        let resultOrder = {};
        if (status === 200) {
          setOrder(data);
          resultOrder = {
            ...returnOrder,
            order: data,
            product_return: data.product,
          };
          console.log("result", returnOrder);
          const res = await getShipperInfor(data.shipperID);
          if (res.status === 200) {
            resultOrder = { ...resultOrder, shipper: res.data };
          }
          setReturnOrder(resultOrder);
        }
      } catch {}
      setLoading(false);
    }
    fetchOrders();
  }, []);

  const handleSubmit = async () => {
    try {
      console.log(JSON.stringify(returnOrder));
      const { status, data } = await requestReturnOrder(returnOrder);
      if (status === 200) {
        await updateOrderAfterReturn(order.id, {
          return_order_id: data.id,
          status: RETURN_ORDER.value,
          typeOrder: TYPE_FINISHED_ORDER,
        });
        history.push(`/shipper/return-order/${data.id}`);
      }
    } catch (err) {}
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReturnOrder({ ...returnOrder, [name]: value });
  };
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <Row>
                <Col>
                  <Form>
                    <Form.Group
                      className="p-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <p>
                        Nguời tạo: <b>{returnOrder.shipper?.name}</b>
                      </p>
                      <p>
                        Ngày tạo:{" "}
                        <b>{moment(new Date()).format("DD/MM/YYYY")}</b>
                      </p>
                      <Form.Label>Lí do đổi hàng</Form.Label>
                      <Form.Control
                        className="p-3"
                        as="textarea"
                        rows={7}
                        style={{ backgroundColor: "#fafafa" }}
                        value={returnOrder.reason}
                        name="reason"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      disabled={!returnOrder.reason}
                      variant="success"
                      onClick={handleSubmit}
                    >
                      Lưu
                    </Button>
                  </div>
                </Col>
                <Col>
                  {" "}
                  <div
                    className="card"
                    style={{ padding: "10px 20px", minHeight: "80vh" }}
                  >
                    <p>
                      Mã đơn hàng: <b>{order.id?.toUpperCase()}</b>
                    </p>
                    <p>
                      Shipper: <b>{returnOrder.shipper?.name}</b>
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
                      <div
                        key={index}
                        style={{ borderBottom: "1px solid #ccc" }}
                      >
                        <Container>
                          <Row>
                            <Col xs={4}>
                              <img
                                src={item.image_link}
                                alt="product"
                                style={{ width: "100px" }}
                              />
                            </Col>
                            <Col xs={8}>Tên sản phẩm: {item.name}</Col>
                          </Row>
                        </Container>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ReturnOrder;
