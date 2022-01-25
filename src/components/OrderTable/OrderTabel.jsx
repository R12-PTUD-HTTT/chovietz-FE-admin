import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Dropdown } from "react-bootstrap";
import {
  OrderStatus,
  TYPE_CANCELED_ORDER,
  TYPE_FINISHED_ORDER,
  TYPE_NEW_ORDER,
  CANCELED,
} from "../../constants/order";
import { updateOrderStatus } from "../../api";
import CustomAlert from "../../components/Alert/CustomAlert";
import { useSelector } from "react-redux";
import { selectRole } from "../../redux/selectors/userSelector";

function OrderTabel({ orders }) {
  const [orderList, setOrderList] = useState([]);
  const [message, setMessage] = useState("");
  const [isShowMessage, setIsShowMessage] = useState("");
  const role = useSelector(selectRole);

  useEffect(() => {
    if (orders?.length) {
      setOrderList(orders);
    }
  }, [orders]);
  const handleChaneStatus = async (order, newIdStatus) => {
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
        let newOrderList = orderList.map((item) => {
          if (item.id === order.id) {
            item.status = changeStatus.value;
          }
          return item;
        });
        setOrderList(newOrderList);
      }
    } catch (error) {
      setMessage(error);
    }
  };
  return (
    <>
      <CustomAlert
        message={message}
        isShow={isShowMessage}
        onClose={setIsShowMessage}
      />
      <div className="card-body px-0 pb-2">
        <div className="table-responsive p-0" style={{ minHeight: "70vh" }}>
          <table className="table align-items-center mb-0">
            <thead>
              <tr>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Mã đơn hàng
                </th>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                  Khách hàng
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Tình trạng
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Ngày đặt hàng
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Ngày cập nhật
                </th>
              </tr>
            </thead>
            <tbody>
              {orderList?.length &&
                orderList.map((order, index) => (
                  <tr key={index}>
                    <td>
                      <Link to={`/${role}/orders/${order.id}/detail`}>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src={order.product[0]?.image_link}
                              className="avatar avatar-sm me-3 border-radius-lg"
                              alt="user1"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{order.id}</h6>
                            <p className="text-xs text-secondary mb-0">
                              {order.product?.length} Sản phẩm
                            </p>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td>
                      <p className="text-xs font-weight-bold mb-0">
                        {order.customer?.username}
                      </p>
                      <p className="text-xs text-secondary mb-0">
                        {order.customer?.phoneNumber}
                      </p>
                    </td>
                    <td className="align-middle text-center text-sm">
                      <Dropdown size="sm">
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          style={{ padding: "5px 7px" }}
                        >
                          <span style={{ fontSize: "10px" }}>
                            {OrderStatus.find(
                              (item) => item.value === order.status
                            )?.label || "NONE"}
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
                                  handleChaneStatus(order, status.id);
                                }}
                              >
                                <b>{status.label}</b>
                              </Dropdown.Item>
                            );
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">
                        {moment(order.created_date).format("DD.MM.YYYY")}
                      </span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">
                        {order.updated_date
                          ? moment(order.updated_date).format("DD.MM.YYYY")
                          : "---"}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default OrderTabel;
