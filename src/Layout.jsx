import React from "react";
import { Route, Switch } from "react-router-dom";
import SecureView from "./routers/SecureView";
import HomePage from "./views/commons/home/HomePage";
import LoginPage from "./views/commons/Login/LoginPage";
import NotFoundPage from "./views/commons/Error/NotFoundPage";
import NavBar from "./component/NavBar/NavBar";
import SignUpPage from "./component/SignUp/SignUp";

function Layout(props) {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      {SecureView()}
      <Route component={NotFoundPage} />
    </Switch>
    </>
  );
}

export default Layout;
