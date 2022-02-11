import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";

function StoreProfit(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Thống kê doanh thu"));
  return <React.Fragment>Store Profit</React.Fragment>;
}

export default StoreProfit;
