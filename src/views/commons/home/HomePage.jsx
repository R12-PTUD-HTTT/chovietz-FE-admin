import React from "react";
import { setPageHeder } from "../../../redux/actions/pageAction";

function HomePage(props) {
  setPageHeder("Dashboard");
  return <></>;
}

export default HomePage;
