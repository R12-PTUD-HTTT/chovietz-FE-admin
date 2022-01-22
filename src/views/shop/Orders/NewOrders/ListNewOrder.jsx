import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../../redux/actions/pageAction";
import OrderTabel from "../../../../components/OrderTable/OrderTabel";
import { getNewOrders } from "../../../../api";
import CustomPagination from "../../../../components/pagination/CustomPagination";

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
      const { data, status } = await getNewOrders({ page, size: 1 });
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
              <div style={{ minHeight: "70vh" }}>
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
