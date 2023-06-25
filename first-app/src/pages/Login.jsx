import React from "react";
import FormLogin from "../components/FormLogin";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  //Torna ad Home
  const backToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <Container className="py-5">
      <Button className="px-3 py-2 my-4 btn-secondary" onClick={backToHome}>
        Back to Home
      </Button>
      <Row className="d-flex justify-content-center">
        <Col xs={12} lg={8}>
          <FormLogin />
        </Col>
      </Row>
    </Container>
  );
}
