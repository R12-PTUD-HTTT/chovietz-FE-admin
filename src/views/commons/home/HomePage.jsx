import React from "react";
import { setPageHeder } from "../../../redux/actions/pageAction";

function HomePage(props) {
  setPageHeder("Dashboard");
  return (
    <>
      <h2>Home</h2>
    </>
  );
}

export default HomePage;
