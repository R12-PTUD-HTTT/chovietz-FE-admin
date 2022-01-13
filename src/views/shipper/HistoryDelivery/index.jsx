import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";

function HistoryDelivery(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Lịch sử giao hàng"));
  return (
    <React.Fragment>
      <h1>Lịch sử giao hàng</h1>
    </React.Fragment>
  );
}

export default HistoryDelivery;
