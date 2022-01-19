import React from "react";
import { Navbar } from "react-bootstrap";
import { setPageHeder } from "../../../redux/actions/pageAction";
import NavBar from "../../../components/NavBar/NarBar"
function HomePage(props) {
  setPageHeder("Dashboard");
  return (
    <>
    <NavBar/>
      <h2>Home</h2>
    </>
  );
}

export default HomePage;
