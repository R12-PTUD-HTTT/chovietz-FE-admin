import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form } from "react-bootstrap";
import moment from "moment";
import { Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { setPageHeder } from "../../../redux/actions/pageAction";
import {
  addNewOrder,
  addNewOrderForReturnOrder,
  getReturnOrder,
} from "../../../api";
import {
  selectRole,
  selectUserId,
} from "../../../redux/selectors/userSelector";
import { shop } from "../../../constants/roles";

const returnOrderTemplate = {
  shipper: {},
  order: {},
  product_return: [],
  reason: "",
};
function ViewReturnOrder(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Yêu cầu đổi trả hàng"));
  const [returnOrder, setReturnOrder] = useState(returnOrderTemplate);
  const [loading, setLoading] = useState(false);
  const role = useSelector(selectRole);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchReturnOrderDetail() {
      try {
        const { data, status } = await getReturnOrder(id);
        if (status === 200) {
          setReturnOrder(data);
        }
      } catch {}
    }
    id && fetchReturnOrderDetail();
  }, []);
  const handleAddOrder = async () => {
    try {
      const newOrder = { ...returnOrder.order };
      const { status, data } = await addNewOrder(newOrder);
      if (status === 200) {
        console.log("success", data);
        const res = await addNewOrderForReturnOrder(returnOrder.id, data);
        if (res.status === 200) {
          console.log("àter", data);
          history.push(`/${role}/orders/${data.Id}/detail`);
        }
      }
    } catch {}
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
                      {role === shop && (
                        <div>
                          <Button variant="success" onClick={handleAddOrder}>
                            Tạo đơn mới
                          </Button>
                        </div>
                      )}
                      <p>
                        Nguời tạo: <b>{returnOrder.shipper?.name}</b>
                      </p>
                      <p>
                        Ngày tạo:{" "}
                        <b>{moment(new Date()).format("DD/MM/YYYY")}</b>
                      </p>
                      <p>
                        Lí do đổi hàng: <b>{returnOrder.reason}</b>
                      </p>
                    </Form.Group>
                  </Form>
                </Col>
                <Col>
                  {" "}
                  <div
                    className="card"
                    style={{ padding: "10px 20px", minHeight: "80vh" }}
                  >
                    <p>
                      Mã đơn hàng: <b>{returnOrder.order?.id?.toUpperCase()}</b>
                    </p>
                    <p>
                      Shipper: <b>{returnOrder.shipper?.name}</b>
                    </p>
                    <p>
                      Khách hàng: <b>{returnOrder.order?.customer?.username}</b>
                    </p>
                    <h6>Người nhận:</h6>
                    <p>
                      Họ tên: <b>{returnOrder.order?.receiver?.name}</b>
                    </p>
                    <p>
                      Số điện thoại:{" "}
                      <b>{returnOrder.order?.receiver?.phone_number}</b>
                    </p>
                    <p>
                      Địa chỉ:{" "}
                      <b>
                        {returnOrder.order?.receiver?.address},{" "}
                        {returnOrder.order?.receiver?.ward},{" "}
                        {returnOrder.order?.receiver?.district},
                        {returnOrder.order?.receiver?.city}
                      </b>
                    </p>
                    <h6>Thông tin đơn hàng:</h6>
                    {returnOrder.order?.product?.map((item, index) => (
                      <div
                        key={index}
                        style={{ borderBottom: "1px solid #ccc" }}
                      >
                        <Container>
                          <Row>
                            {" "}
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

export default ViewReturnOrder;
