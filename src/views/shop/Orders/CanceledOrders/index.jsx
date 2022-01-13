import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../../redux/actions/pageAction";

function CanceledOrder(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Đơn hàng bị hủy"));
  return <React.Fragment>Cancel order</React.Fragment>;
}

export default CanceledOrder;
