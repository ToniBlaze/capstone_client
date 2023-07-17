import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Team1 from "../../assets/team1.png"
import Team2 from "../../assets/team2.png"
import Team3 from "../../assets/team3.png"



export default function Team() {
  return (
    <Container id="team" className="mt-4 pb-3">
      <div className="container px-3 py-5">
        
        <h2 className="mb-4 text-primary">Ci amerai che il mercato salga o scenda!</h2>

        <Row>
          <Col>
            <p className="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
              imperdiet velit. Phasellus aliquet, lorem eget condimentum
              sollicitudin, dui magna elementum eros, ac eleifend ligula tellus
              nec metus. In vel dignissim lorem. Aliquam ultrices sagittis
              mauris eget dapibus. Maecenas vel mauris finibus, tristique dui
              sed, tincidunt est. Nam nec magna eget lacus malesuada lacinia.
              Suspendisse elementum sed magna sed tristique. Quisque blandit vel
              mauris a iaculis. Suspendisse eleifend viverra rutrum. Cras
              consequat quam est, ut eleifend mauris fermentum et. Quisque
              iaculis, sapien quis fermentum convallis, ex dolor rutrum odio, id
              malesuada turpis nulla ac massa. Duis ut rutrum sapien. In viverra
              mattis neque, nec dignissim dui fringilla nec. Suspendisse vitae
              ullamcorper augue, vel consequat magna. Aenean ac vestibulum nunc.
              Nunc mollis ligula vitae dolor commodo egestas. Proin vel
              fringilla turpis. Cras et placerat magna, eget vehicula enim.
              Curabitur dapibus vel ante eu ullamcorper. Duis fermentum orci at
              suscipit malesuada. Donec tempus a erat vel pellentesque. Nam
              tempus arcu ac velit consectetur mollis at non nisi. Donec
              elementum arcu et eros pharetra feugiat. Donec eleifend, mi non
              tincidunt tincidunt, arcu diam congue nulla, sit amet cursus massa
              nisi eu ligula. Vivamus vitae massa molestie, mollis sem at,
              rutrum dolor. Nunc mauris eros, consequat eget nulla sed, posuere
              iaculis metus.
            </p>
          </Col>
        </Row>

        <h3 className="mb-2 mt-5">Siamo semplici Trader appassionati, come voi!</h3>
        <Row className="row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          
          <Col>
            <Card className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <Card.Img
                src={Team1}
                alt="Foto del membro"
              />
              <Card.Body className="d-flex flex-column h-100 p-5 text-white text-shadow-1 justify-content-center align-items-center">
                <Card.Title className="display-7 lh-1 fs-3 fw-bold">
                  Alessio Toninello
                </Card.Title>
                <Card.Text>Trader</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <Card.Img
               src={Team2}
                alt="Foto del membro"
              />
              <Card.Body className="d-flex flex-column h-100 p-5 text-white text-shadow-1 justify-content-center align-items-center">
                <Card.Title className="display-7 lh-1 fs-3 fw-bold">
                  Leonardo Scalise
                </Card.Title>
                <Card.Text>Trader</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <Card.Img
                src={Team3}
                alt="Foto del membro"
              />
              <Card.Body className="d-flex flex-column h-100 p-5 text-white text-shadow-1 justify-content-center align-items-center">
                <Card.Title className="display-7 lh-1 fs-3 fw-bold">
                  Riccardo Ventura
                </Card.Title>
                <Card.Text>Developer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
