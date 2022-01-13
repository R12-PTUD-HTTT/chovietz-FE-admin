import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";

function NewOrderDelivery(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Đơn hàng mới"));
  return (
    <React.Fragment>
      <h1>Đơn hàng mới</h1>
    </React.Fragment>
  );
}

export default NewOrderDelivery;
