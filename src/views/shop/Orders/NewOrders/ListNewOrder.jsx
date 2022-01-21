import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../../redux/actions/pageAction";
import OrderTabel from "../../../../components/OrderTable/OrderTabel";
import { getNewOrders } from "../../../../api";
import CustomPagination from "../../../../components/pagination/CustomPagination";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function ListNewOrder(props) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  dispatch(setPageHeder("Đơn hàng mới"));
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true);
        const { data, status } = await getNewOrders({ page, size });
        if (status === 200) {
          console.log(data);
          setOrderList(data.orders);
        }
      } catch {}
      setLoading(false);
    }
    fetchOrders();
  }, []);
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2"></div>
              {!loading && <OrderTabel orders={orderList} />}
              <CustomPagination
                pages={orderList.totalPages}
                itemsPerPage={10}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListNewOrder;
