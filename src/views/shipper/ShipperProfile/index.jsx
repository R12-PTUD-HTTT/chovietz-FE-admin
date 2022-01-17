import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";

function ShipperProfile(props) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Thông tin shipper"));
  return (
    <React.Fragment>
      <h1>Thông tin shipper</h1>
    </React.Fragment>
  );
}

export default ShipperProfile;
