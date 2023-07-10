import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BlogBannerLink() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/tradecorner");
  }

  return (
    <Container className="my-5 p-5">
      <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-4 overflow-hidden border blog-banner-shadow">
        <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis pb-4">
            Sei un Trader o aspirante tale?
          </h1>
          <p className="lead fs-5">
            Unisciti alla vibrante community di TradeCorner, dove l'energia si
            fonde con la passione e dove potrai condividere idee brillanti e
            trovare l'ispirazione per il prossimo trade di successo! <br />
            Troverai idee ed opinioni diverse ma tutte pronte a esplorare le
            opportunità del mercato e a creare connessioni durature. <br />
            Entra a far parte di TradeCorner oggi stesso!
          </p>
          <div className=" d-md-flex justify-content-md-center pt-3">
            <button
              type="button"
              className="btn btn-lg px-4 me-md-2 fw-bold btn-custom"
              onClick={handleClick}>
              Vai a TradeCorner!
            </button>
          </div>
        </Col>
        <Col lg={4} className="offset-lg-1 p-0 overflow-hidden ">
          <img
            className="rounded-lg-3"
            src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt=""
            width="720"
          />
        </Col>
      </Row>
    </Container>
  );
}
