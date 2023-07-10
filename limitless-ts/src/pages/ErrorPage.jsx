import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Row>
        <Col className="my-5">
          <div className="py-3 fs-3 fw-bold text-white">*** Not Found ***</div>
          <Button className="btn-back" onClick={backToHome}>Back to Home</Button>
        </Col>
      </Row>
    </Container>
  );
}
