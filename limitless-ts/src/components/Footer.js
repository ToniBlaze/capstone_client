import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container fluid>
      <Row className="d-flex flex-wrap justify-content-around align-items-center pb-5 pt-4 border-top bg-white">
        <Col md={4} className="mb-0 text-body-secondary">
          © 2023 Company, Inc
        </Col>

        <Col md={4} className="d-flex justify-content-center">
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
