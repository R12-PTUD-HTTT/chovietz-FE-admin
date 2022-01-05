import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import style from "./custom.module.css";
CustomAlert.propTypes = {};

function CustomAlert({ message, isShow, onClose, variant = "primary" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(!!isShow);
  }, [isShow]);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
        onClose && onClose(false);
      }, 5000);
    }
  }, [show]);
  return (
    <Alert
      variant={variant}
      show={show}
      className={style.customStyle}
      onClose={() => setShow(false)}
      dismissible
    >
      {message}
    </Alert>
  );
}

export default CustomAlert;
