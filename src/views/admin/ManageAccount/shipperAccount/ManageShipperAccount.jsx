import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../../redux/actions/pageAction";

function ManageShipperAccount({}) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Quản lí tài khoản shipper"));
  return <h2>Quản lí tài khoản shipper </h2>;
}

export default ManageShipperAccount;
