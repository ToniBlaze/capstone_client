import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import jwt_decode from "jwt-decode";

export default function ChangeComment({
  postId,
  commentId,
  setCommentsCount,
  item,
}) {
  const [show, setShow] = useState(false);
  const [obj, setObj] = useState({});
  const [error, setError] = useState(null);

  // CHIUSURA MODALE
  function handleClose(e) {
    setShow(false);
    setObj({});
    setError(null);
  }

  //APERTURA DEL MODALE
  function handleShow(e) {
    setShow(true);
    e.preventDefault();
    e.stopPropagation();
  }

  // PRENDI I DATI DEL FORM
  const handlerChange = (e) => {
    //verifica i value in tutti gli input e restituisce il valore
    let { name, value } = e.target;
    setObj({
      ...obj,
      [name]: value,
    });

    console.log(e.target.name);
  };

  // GESTISCI INVIO FORM
  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    // Verifica presenza "content"
    if (!obj.content) {
      setError("Inserisci commento!");
      return;
    }

    // Prendi il Token e destrutturalo per trovare dati utente
    const token = sessionStorage.getItem("userLogin");
    const decodedToken = jwt_decode(token);
    const author = decodedToken.id;

    // Aggiungi l'autore all'oggetto dei dati
    const newData = {
      ...obj,
      author: author,
    };
    console.log(newData);

    axios
      .put(
        `http://localhost:3000/posts/${postId}/comments/${commentId}`,
        newData
      )
      .then((res) => {
        console.log(res);
        setCommentsCount((prevCount) => prevCount + 1);
        handleClose();
      });
  }

  return (
    <div>
      <Button className="ms-3 btn-sm" variant="primary" onClick={handleShow}>
        Modifica
      </Button>

      {/* MODALE */}
      <Modal show={show} onClick={handleClose}>
        <Modal.Header onClick={(e) => e.stopPropagation()}>
          <Modal.Title>Modifica commento</Modal.Title>
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
                placeholder={item.content}
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
