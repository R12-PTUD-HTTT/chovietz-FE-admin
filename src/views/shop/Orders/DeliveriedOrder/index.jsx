import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../../redux/actions/pageAction";

function DeliveredOrder(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Đơn hàng đã giao"));
  return <React.Fragment>Delivered Order</React.Fragment>;
}

export default DeliveredOrder;
