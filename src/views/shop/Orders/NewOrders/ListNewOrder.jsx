import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../../redux/actions/pageAction";
import OrderTabel from "../../../../components/OrderTable/OrderTabel";
import { getOrdersByType } from "../../../../api";
import CustomPagination from "../../../../components/pagination/CustomPagination";
import { TYPE_NEW_ORDER } from "../../../../constants/order";

function ListNewOrder(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Đơn hàng mới"));
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchOrders(0);
  }, []);
  const fetchOrders = async (page) => {
    try {
      setLoading(true);
      const { data, status } = await getOrdersByType({
        page,
        size: 1,
        typeOrder: TYPE_NEW_ORDER,
      });
      if (status === 200) {
        setOrderList(data);
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
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2"></div>
              <div>
                <OrderTabel orders={orderList.orders} />
              </div>
              {orderList.orders?.length && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CustomPagination
                    currentPage={orderList.currentPage}
                    totalPages={orderList.totalPages}
                    handleChangePage={fetchOrders}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListNewOrder;
