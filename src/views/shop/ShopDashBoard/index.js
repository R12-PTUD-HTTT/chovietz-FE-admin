import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";

function ShopDashBoard(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Shop Dashboard"));
  return <div>ShopDashBoard</div>;
}

export default ShopDashBoard;
