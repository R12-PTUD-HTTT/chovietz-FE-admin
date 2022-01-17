import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";

function StoreProfile(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Thông tin cửa hàng"));
  return <React.Fragment>Store profile</React.Fragment>;
}

export default StoreProfile;
