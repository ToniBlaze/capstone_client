import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function ProductsSection() {
  return (
    <Container id="products" className="pb-5 pt-4 mb-5">
      <Row className="justify-content-center">
        <Col xs={10} md={8}>
          <h2 className="pb-2 border-bottom"> Le nostre proposte</h2>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center pt-3">
        <Col xs={12} md={10} className="d-flex flex-wrap justify-content-around">
          <Col xs={10} sm={8} lg={5} className="m-4">
            <Card className="tridens-bg text-white p-5 d-flex justify-content-center rounded-4">
              <Card.Title>Tridens</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card>
          </Col>
          <Col xs={10} sm={8} lg={5} className="m-4">
            <Card className="fidelis-bg text-white p-5 d-flex justify-content-center rounded-4">
              <Card.Title>Fidelis</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
