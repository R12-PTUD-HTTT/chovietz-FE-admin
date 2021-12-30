import React from "react";
import PropTypes from "prop-types";
import DefaultHeader from "./Header/DefaultHeader";

DefaultLayout.propTypes = {};

function DefaultLayout(props) {
  const { children } = props;
  return (
    <React.Fragment>
      <DefaultHeader />
      {children}
    </React.Fragment>
  );
}

export default DefaultLayout;
