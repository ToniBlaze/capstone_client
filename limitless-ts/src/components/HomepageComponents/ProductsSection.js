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
      <Row className="align-items-center justify-content-center pt-3 px-md-5">
          <Col xs={12} sm={9} md={8} lg={5} xxl={4} className="m-4">
            <Card className="tridens-bg text-white p-5 d-flex justify-content-center rounded-4">
              <Card.Title className="fs-3">Tridens</Card.Title>
              <Card.Text >
                Strategia di breve periodo. <br></br>
                Per chi è disposto a rischiare in cambio di rendimenti elevati.
              </Card.Text>
            </Card>
          </Col>
          <Col xs={12} sm={9} md={8} lg={5} xxl={4} className="m-4">
            <Card className="fidelis-bg text-white p-5 d-flex justify-content-center rounded-4">
              <Card.Title className="fs-3">Fidelis</Card.Title>
              <Card.Text>
              Strategia di lungo periodo. <br></br>
                Per chi cerca equilibrio tra rischio e rendimento.
              </Card.Text>
            </Card>
          </Col>
      
      </Row>
    </Container>
  );
}
