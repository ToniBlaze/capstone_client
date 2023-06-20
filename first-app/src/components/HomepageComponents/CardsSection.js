import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import TradingImage from "../../assets/tradingimage.jpg";

export default function CardsSection() {
  return (
    <>
      {/* PRIMA SEZIONE --> Cards Problemi */}
      <Container className="mt-4 pb-3">
        <div className="container px-3 py-5">
          <h2 className="pb-2 border-bottom">
            Nel Trading ci sono sempre gli stessi problemi...
          </h2>

          <Row className="row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <Col>
              <Card className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <Card.Body className="d-flex flex-column h-100 p-5 text-white text-shadow-1 justify-content-center align-items-center">
                  <Card.Title as="h3" className="display-7 lh-1 fw-bold">
                    Le emozioni...
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <Card.Body className="d-flex flex-column h-100 p-5 text-white text-shadow-1 justify-content-center align-items-center">
                  <Card.Title as="h3" className="display-7 lh-1 fw-bold">
                    Il 95% dei Trader perde soldi...
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <Card.Body className="d-flex flex-column h-100 p-5 text-shadow-1 justify-content-center align-items-center">
                  <Card.Title as="h3" className="display-7 lh-1 fw-bold">
                    Il tempo a grafico...
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      {/* SECONDA SEZIONE --> Accordion Soluzioni */}
      <Container className="my-5">
          <h2 className="pb-2 mx-5 border-bottom">
            Il Trading algoritmico è la soluzione che cerchi!
          </h2>
          <h4 className="text-danger"> AGGIUNGERE TESTO PER SPIEGARE CON COLLEGAMENTO A DETTAGLI</h4>
          <Row>
            <Col className="d-flex flex-wrap justify-content-around">
              <Col className="pt-4" xs={10} md={5}>
                <Image src={TradingImage} fluid />
              </Col>

              {/* ACCORDION */}
              <Col xs={10} md={6} className="py-4">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Mancanza di emotività</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Non servono competenze</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Zero tempo a grafico</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Col>
          </Row>
      </Container>
    </>
  );
}
