import React, { useEffect, useState } from "react";
import { ImFilesEmpty } from "react-icons/im";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../../redux/actions/pageAction";
import OrderTabel from "../../../../components/OrderTable/OrderTabel";
import { getOrdersByType } from "../../../../api";
import CustomPagination from "../../../../components/pagination/CustomPagination";
import Loader from "../../../../components/LoaderEffect/Loader";
import { TYPE_CANCELED_ORDER } from "../../../../constants/order";

function CanceledOrder(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Đơn hàng bị hủy"));
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
        typeOrder: TYPE_CANCELED_ORDER,
      });
      console.log(data);
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
                {orderList.orders?.length > 0 && (
                  <OrderTabel orders={orderList.orders} />
                )}
                {loading ? (
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "70vh",
                      flexDirection: "column",
                    }}
                  >
                    <Loader />
                  </div>
                ) : orderList.orders?.length === 0 ? (
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "70vh",
                      flexDirection: "column",
                    }}
                  >
                    <ImFilesEmpty style={{ fontSize: "1.6em" }} />
                    <h4>Empty</h4>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {orderList.orders?.length > 0 && (
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

export default CanceledOrder;
