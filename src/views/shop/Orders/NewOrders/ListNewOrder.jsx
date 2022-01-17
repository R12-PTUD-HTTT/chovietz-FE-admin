import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../../redux/actions/pageAction";

function ListNewOrder(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Đơn hàng mới"));
  return <React.Fragment>List new order</React.Fragment>;
}

export default ListNewOrder;
