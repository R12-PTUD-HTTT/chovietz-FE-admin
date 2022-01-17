import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";

function ListPartner({}) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Danh sách đối tác"));
  return <h2>Danh sách đối tác </h2>;
}

export default ListPartner;
