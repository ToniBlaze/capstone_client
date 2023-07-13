import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import TradingImage from "../../assets/tradingimage.jpg";

export default function CardsSection() {
  return (
    <>
      {/* FIRST SECTION  --> Cards Problems */}
      <Container className="mt-4 pb-3">
        <div className="container px-3 py-5">
          <h2 className="pb-2 border-bottom">
            Nel Trading ci sono sempre gli stessi problemi
          </h2>

          <Row className="row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <Col>
              <Card className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 cards-shadow">
                <Card.Body className="d-flex flex-column h-100 p-5 text-white text-shadow-1 justify-content-center align-items-center">
                  <Card.Title as="h3" className="display-7 lh-1 fw-bold">
                    Le emozioni
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 cards-shadow">
                <Card.Body className="d-flex flex-column h-100 p-5 text-white text-shadow-1 justify-content-center align-items-center">
                  <Card.Title as="h3" className="display-7 lh-1 fw-bold">
                    Il 95% dei Trader perde soldi
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 cards-shadow">
                <Card.Body className="d-flex flex-column h-100 p-5 text-shadow-1 justify-content-center align-items-center">
                  <Card.Title as="h3" className="display-7 lh-1 fw-bold">
                    Il tempo a grafico
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      {/* SECOND SECTION  --> Accordion Solutions */}
      <Container className="my-5">
        <h2 className="pb-2 mx-5 border-bottom">
          Il Trading algoritmico è la soluzione che cerchi!
        </h2>
        <p className="text-body mx-5 px-5 py-3"> 
          Un trading system (TS) è un programma informatico che opera in maniera
          autonoma al fine di guadagnare dal movimento di prezzo indistintamente
          dallo strumento finanziario su cui viene fatto lavorare, il TS quindi
          teoricamente può operare su indici, azioni, criptovalute, materie
          prime ecc. <br />
          Il nostro trading system è in grado di funzionare <b>24 ore su 24. </b> <br /><br/> 
          Al momento è posizionato su BTC/USD poiché la criptovaluta, a
          differenza di azioni e indici è scambiata ogni momento 7 giorni su 7,
          questo implica che ci sono più occasioni di trading. <br/>  Il broker su cui
          ci appoggiamo è «Binance», il più grande scambiatore di criptovalute
          al mondo, la piattaforma offre innumerevoli funzionalità tra cui le
          API grazie al quale andremo a collegare la nostra strategia al tuo
          conto. Questo vuol dire che per iniziare ti basterà depositare i fondi
          sul tuo account e collegare con pochi semplici passaggi il trading
          system. <br/> <b>Teniamo in particolar modo a specificare che Il broker
          consente solo l’operatività, non ci è permesso in alcun modo di
          prelevare fondi dal tuo account. </b> <br/> <br/> L’unicità della nostra strategia sta
          nel <b> «two way earning» (TWE) </b>, la versione Long guadagna dollari, la
          versione Short accumula Bitcoin, questo è possibile dal momento che
          operiamo sul mercato spot, in Long acquista Bitcoin, una volta che si
          apprezza di valore rivende guadagnando dollari. In Short vende Bitcoin
          per acquistare dollari, una volta che la criptovaluta ha diminuito il
          suo valore la riacquista in quantità maggiore rispetto all’apertura
          del trade.
        </p>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Non servono competenze</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Zero tempo a grafico</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
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
