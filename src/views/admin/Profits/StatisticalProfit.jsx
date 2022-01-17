import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";

function StatisticalProfit(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Thống kê doanh thu"));
  return <h2>Thống kê doanh thu </h2>;
}

export default StatisticalProfit;
