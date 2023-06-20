import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Posts from "../../components/TradeCornerComponents/Posts";

export default function TradeCorner() {
  const navigate = useNavigate();

  // Verifica la presenza del token nel localStorage
  const verifyToken = () => {
    const token = localStorage.getItem("userLogin");
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  //Torna ad Home
  const backToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <Container className="my-5 ">
      <Button className="px-3 py-2 my-4 btn-secondary" onClick={backToHome}>
        Back to Home
      </Button>
      <Row className="d-flex justify-content-center">
        <Posts />
      </Row>
    </Container>
  );
}
