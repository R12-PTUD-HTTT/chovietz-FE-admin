import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";
import CustomerHistoryTable from "../../../components/Table/CustomerHistoryTable"

function HistoryOrder(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Lịch sử đơn hàng"));
  return (
    <React.Fragment>
      <h1>Lịch sử đơn hàng</h1>
      <CustomerHistoryTable/>
    </React.Fragment>
  );
}

export default HistoryOrder;
