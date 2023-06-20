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
      <Row className="justify-content-center">
        <Col xs={10} md={9} className="d-flex flex-wrap justify-content-around">
          <Col xs={8} md={4} className="m-4">
            <Card className="bg-dark text-white p-5">
              <Card.Title>Tridens</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card>
          </Col>
          <Col xs={8} md={4} className="m-4">
            <Card className="bg-dark text-white p-5">
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
