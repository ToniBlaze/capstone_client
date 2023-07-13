import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import jwt_decode from "jwt-decode";

export default function AddComment({ postId, setCommentsCount }) {
  const [show, setShow] = useState(false);
  const [obj, setObj] = useState({});
  const [error, setError] = useState(null);

  // CLOSE MODAL
  function handleClose(e) {
    setShow(false);
    setObj({});
    setError(null);
  }

  // OPEN MODAL
  function handleShow(e) {
    setShow(true);
    e.preventDefault();
    e.stopPropagation();
  }

  // GET FORM VALUE
  const handlerChange = (e) => {
    // checks the values in all inputs and returns the value
    let { name, value } = e.target;
    setObj({
      ...obj,
      [name]: value,
    });

    console.log(e.target.name);
  };

  // HANDLE FORM SUMBIT
  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    // Check "content"
    if (!obj.content) {
      setError("Inserisci commento!");
      return;
    }

    // Take the Token and deconstruct it to find user data
    const token = sessionStorage.getItem("userLogin");
    const decodedToken = jwt_decode(token);
    const author = decodedToken.id;

    // Add author to data object
    const newData = {
      ...obj,
      author: author,
    };

    axios.post(`http://localhost:3000/posts/${postId}`, newData).then((res) => {
      console.log(res);
      setCommentsCount((prevCount) => prevCount + 1);
      handleClose();
    });
  }

  return (
    <div>
      <Button className="btn-submit-form" onClick={handleShow}>
        Aggiungi commento
      </Button>

      {/* MODALE */}
      <Modal show={show} onClick={handleClose}>
        <Modal.Header onClick={(e) => e.stopPropagation()}>
          <Modal.Title>Aggiungi commento</Modal.Title>
        </Modal.Header>

        <Modal.Body
          className="d-flex justify-content-center"
          onClick={(e) => e.stopPropagation()}>
          {/* FORM */}
          <Form className="text-center w-100" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Scrivi il tuo commento: </Form.Label>
              <Form.Control
                className="input-text w-100"
                as="textarea"
                maxLength={100}
                name="content"
                placeholder="Esprimi la tua opinione!"
                onChange={handlerChange}
                onClick={(e) => e.stopPropagation()}
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}

            <Button
              className="mt-2"
              variant="primary"
              type="submit"
              onClick={handleSubmit}>
              Invia
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer onClick={(e) => e.stopPropagation()}>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
