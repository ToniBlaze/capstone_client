import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function ChangeComment({ postId, commentId, setCommentsCount, item }) {
  const [show, setShow] = useState(false);
  const [obj, setObj] = useState({});

  // CHIUSURA MODALE
  function handleClose(e) {
    setShow(false);
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

    axios
      .put(`http://localhost:3000/posts/${postId}/comments/${commentId}`, obj)
      .then((res) => {
        console.log(res);
        setCommentsCount((prevCount) => prevCount + 1);
        handleClose();
      });

   
  }

  return (
    <div>
      <Button className="ms-3" variant="primary" onClick={handleShow}>
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
          <Form className="text-center" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 text-center">
              <Form.Label>Autore:</Form.Label>
              <Form.Control
                className="input-text"
                type="text"
                name="author"
                placeholder={item.author}
                onChange={handlerChange}
                onClick={(e) => e.stopPropagation()}
              />
            </Form.Group>

            <Form.Group className="mb-3 input-number">
              <Form.Label>Scrivi il tuo commento: </Form.Label>
              <Form.Control
                className="input-text"
                type="text"
                name="content"
                placeholder={item.content}
                onChange={handlerChange}
                onClick={(e) => e.stopPropagation()}
              />
            </Form.Group>
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


