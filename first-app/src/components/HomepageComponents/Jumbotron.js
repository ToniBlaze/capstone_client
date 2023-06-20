import React from "react";
import { Col } from "react-bootstrap";

export default function Jumbotron() {
  return (
    <Col className="bg-dark text-secondary py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">Limitless TS</h1>
        <div className="col-lg-8 mx-auto">
          <p className="fs-6 mb-4">
            Esplora il potenziale del trading automatico, senza competenze
            tecniche specializzate. <br />
            <br />
            Unisciti a noi per scoprire come il trading automatico può
            trasformare il tuo approccio finanziario. <br />
            Sia che tu sia un principiante o un esperto, le nostre
            soluzioni ti aiuteranno a ottenere risultati tangibili
            sfruttando la potenza degli algoritmi. <br />
            <br />
            Scopri di più e inizia a ottenere risultati con il trading
            algoritmico oggi stesso!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-outline-info btn-md px-4 me-sm-3 fw-bold">
              La nostra soluzione
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
}
