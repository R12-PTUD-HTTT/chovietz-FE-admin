import React, { useEffect } from "react";
import { fetchLogin } from "../../../api/userApi";

function HomePage(props) {
  // useEffect(() => {
  //   const response = fetchLogin({
  //     username: "customer1",
  //     password: "customer",
  //   });
  //   console.log(response);
  // }, []);

  return (
    <>
      <h2>Home</h2>
    </>
  );
}

export default HomePage;
