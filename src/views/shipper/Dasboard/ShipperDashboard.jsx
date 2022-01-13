import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";

function ShipperDashboard({}) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Dashboard"));
  return <React.Fragment>Shihpper Dashboard</React.Fragment>;
}

export default ShipperDashboard;
