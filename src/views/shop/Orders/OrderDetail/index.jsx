import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailOrder } from "../../../../api/index";

function OrderDetail(props) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
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
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <p>
                Mã đơn hàng: <b>{order.id?.toUpperCase()}</b>
              </p>
              <p>
                Khách hàng: <b>{order.customer?.username}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OrderDetail;
