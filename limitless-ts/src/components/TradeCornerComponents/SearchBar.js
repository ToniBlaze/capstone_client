import React from "react";
import { Col } from "react-bootstrap";

export default function SearchBar({ setQuery, setCategory }) {

  return (
    <>
      <Col xs={11} sm={9} md={5} className="mx-4 ">
        <div className="input-group  input-group-sm mb-3">
          <span className="input-group-text bg-black text-light border-secondary">Cerca per Titolo:</span>
          <input
            type="text"
            className="form-control bg-black text-light border-secondary"
            style={{ height: "30.6px" }}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Col>
      <Col xs={6} sm={5} md={3} className="mx-4">
        <select
          className="form-select form-select-sm text-light border-secondary"
          onChange={(e) => setCategory(e.target.value)}>
          <option className="bg-black text-light border-secondary" value="">Tutte le categorie</option>
          <option className="bg-black text-light border-secondary" value="Stocks">Stocks</option>
          <option className="bg-black text-light border-secondary" value="Index">Index</option>
          <option className="bg-black text-light border-secondary" value="Forex">Forex</option>
          <option className="bg-black text-light border-secondary" value="Crypto">Crypto</option>
          <option className="bg-black text-light border-secondary" value="Bond">Bond</option>
        </select>
      </Col>
    </>
  );
}
