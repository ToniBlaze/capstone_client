import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [obj, setObj] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    verifyToken();
  }, []);

  // Verifica la presenza del token nel localStorage
  const verifyToken = () => {
    const token = localStorage.getItem("userLogin");
    if (!token) {
      navigate("/login");
    }
  };

  //Torna alla Home
  const backToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  // Gestore del cambio di input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setObj({
      ...obj,
      [name]: value,
    });
  };

  // Gestore del cambio di file
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Gestore dell'invio del modulo
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const token = localStorage.getItem("userLogin");

    const data = new FormData();
    data.append("uploadFile", selectedFile);

    axios
      .post("http://localhost:3000/upload", data, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        // Setta l'URL dell'immagine uploadata come URL dell'immagine del post
        const newObj = {
          ...obj,
          cover: res.data.path,
        };

        // Chiamata POST per inserire l'oggetto nel database
        return axios
          .post("http://localhost:3000/posts", newObj, {
            headers: {
              authorization: token,
            },
          })
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Button className="px-3 py-2 my-4 btn-secondary" onClick={backToHome}>
        Back to Home
      </Button>
      <h1 className="mt-2 mb-5">Aggiungi il tuo Post</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">Chi è l'autore?</Form.Label>
          <Form.Control
            className="text-center"
            onChange={handleChange}
            type="text"
            name="author.name"
            placeholder="Autore del post..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">Tempo di lettura?</Form.Label>
          <Form.Control
            className="text-center"
            onChange={handleChange}
            type="text"
            name="readTime.value"
            placeholder="Inserisci un numero"
          />
          <Form.Control
            className="text-center"
            onChange={handleChange}
            type="text"
            name="readTime.unit"
            placeholder="Secondi, minuti..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">Che argomento tratta?</Form.Label>
          <Form.Control
            className="text-center"
            onChange={handleChange}
            type="text"
            name="category"
            placeholder="Categoria del post..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">
            Quale è il titolo del Post?
          </Form.Label>
          <Form.Control
            className="text-center"
            onChange={handleChange}
            type="text"
            name="titolo"
            placeholder="Titolo del post..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">
            Scrivi il contenuto del tuo post:
          </Form.Label>
          <Form.Control
            className="text-center"
            onChange={handleChange}
            type="text"
            name="content"
            placeholder="Contenuto del post..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">Carica un'immagine:</Form.Label>
          <Form.Control
            className="text-center"
            onChange={handleFileChange}
            type="file"
            name="uploadFile"
            placeholder="Carica file..."
          />
        </Form.Group>
        <Button
          className="mt-4"
          onClick={handleSubmit}
          variant="primary"
          type="button">
          Invia
        </Button>
      </Form>
    </Container>
  );
}
