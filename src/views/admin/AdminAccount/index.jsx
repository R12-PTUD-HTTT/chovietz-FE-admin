import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";

function AdminAccount(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Thông tin tài khoản"));
  return <h2>Thông tin tài khoản </h2>;
}

export default AdminAccount;
