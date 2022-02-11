import React from "react";
import { useDispatch } from "react-redux";
import { setPageHeder } from "../../../redux/actions/pageAction";

function Dashboard({}) {
  const dispatch = useDispatch();
  dispatch(setPageHeder("Addmin Dashboard"));
  return <>Dashboard page</>;
}

export default Dashboard;
