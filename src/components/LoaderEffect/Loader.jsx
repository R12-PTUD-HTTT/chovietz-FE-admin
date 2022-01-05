import React from "react";
import { Spinner } from "react-bootstrap";

function Loader(props) {
  return (
    <Spinner
      animation="border"
      size="sm"
      style={{
        position: "absolute",
        textAlign: "center",
        left: "49%",
      }}
    />
  );
}

export default Loader;
