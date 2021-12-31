import React, { useEffect } from "react";
import { fetchLogin } from "../../../api/userApi";
import { setPageHeder } from "../../../redux/actions/pageAction";

function HomePage(props) {
  // useEffect(() => {
  //   const response = fetchLogin({
  //     username: "customer1",
  //     password: "customer",
  //   });
  //   console.log(response);
  // }, []);
  setPageHeder("Dashboard");
  return (
    <>
      <h2>Home</h2>
    </>
  );
}

export default HomePage;
