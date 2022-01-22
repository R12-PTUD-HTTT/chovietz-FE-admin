import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";
import ShipperHistoryTable from "../../../components/Table/ShipperHistoryTable"

function HistoryDelivery(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Lịch sử giao hàng"));
  return (
    <React.Fragment>
      <h1>Lịch sử giao hàng</h1>
      <ShipperHistoryTable/>
    </React.Fragment>
  );
}

export default HistoryDelivery;
