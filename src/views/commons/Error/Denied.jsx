import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import lock from "../../../assets/image/lock.png";
function Denied(props) {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={lock} alt="" style={{ width: "50%" }} />
      <h2>Không thể truy cập đường dẫn !</h2>
      <Button variant="success" onClick={goBack}>
        Quay lại
      </Button>
    </Container>
  );
}

export default Denied;
