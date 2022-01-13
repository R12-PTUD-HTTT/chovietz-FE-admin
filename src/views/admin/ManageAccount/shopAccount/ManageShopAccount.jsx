import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../../redux/actions/pageAction";

function ManageShopAccount({}) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Quản lí tài khoản cửa hàng"));
  return <h2>Quản lí tài khoản cửa hàng </h2>;
}

export default ManageShopAccount;
