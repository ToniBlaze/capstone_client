import axios from "axios";
import React, { useState, useEffect } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function NewPost() {
  const [obj, setObj] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [successAlert, setSuccessAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState({});
  const navigate = useNavigate();

  //Torna alla Home
  const backToHome = () => {
    navigate("/tradecorner");
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

  // Gestore del cambio di input per readTime.value
  const handleChangeReadTimeValue = (e) => {
    const { name, value } = e.target;
    setObj({
      ...obj,
      readTime: {
        ...obj.readTime,
        [name]: value,
      },
    });
  };

  // Gestore del cambio di input per readTime.unit
  const handleChangeReadTimeUnit = (e) => {
    const { name, value } = e.target;
    setObj({
      ...obj,
      readTime: {
        ...obj.readTime,
        [name]: value,
      },
    });
  };

  // Gestore del cambio di file
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // *************************************
  // Gestore dell'invio del modulo
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Nel frattempo che fa richiesta mostra SPINNER
    setIsLoading(true);

    // Validazione dei campi
    const { title, content, category, readTime } = obj;
    const newErrors = {};

    if (!readTime) {
      newErrors.readTime = "Inserisci il tempo di lettura!";
    }
    if (!title) {
      newErrors.title = "Inserisci un titolo!";
    }
    if (!content) {
      newErrors.content = "Scrivi qualcosa nel tuo post!";
    }
    if (!category) {
      newErrors.category = "Inserisci la categoria del post!";
    }
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    // Prendi il Token e destrutturalo per trovare dati utente
    const token = localStorage.getItem("userLogin");
    const decodedToken = jwt_decode(token);
    const author = decodedToken.name;
    console.log(author);

    // Aggiungi l'autore all'oggetto dei dati
    const newData = {
      ...obj,
      author: {
        name: author,
      },
    };

    // Carica il file su CLOUDINARY
    const data = new FormData();
    data.append("uploadFile", selectedFile);
    axios
      .post("http://localhost:3000/upload", data, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        // *************
        // SE TUTTO VA BENE.....

        // Setta l'URL dell'immagine uploadata come URL dell'immagine del post
        const newObj = {
          ...newData,
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
            console.log(newObj);

            // Se tutto ok, allora togli SPINNER
            setIsLoading(false);

            // Se tutto ok, allora setta Alert visibile
            setSuccessAlert(true);
            setTimeout(() => {
              setSuccessAlert(false);
              navigate("/tradecorner");
            }, 2000);
          })
          .catch((error) => {
            setError(error.response.data);

            // Se errore, allora togli SPINNER
            setIsLoading(false);
            
            console.error(error);
          });
      })
      .catch((error) => {
        setError(error.response.data);

        // Se errore, allora togli SPINNER
        setIsLoading(false);

        console.error(error);
      });
  };
  return (
    <Container className="pb-5">
      <Button className="px-3 py-2 my-4 btn-secondary" onClick={backToHome}>
        Back to Home
      </Button>
      <h1 className="mt-2 mb-5">Aggiungi il tuo Post</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">Tempo di lettura?</Form.Label>
          <Form.Control
            className="text-center"
            onChange={handleChangeReadTimeValue}
            type="text"
            name="value"
            placeholder="Inserisci un numero"
          />
          <Form.Control
            className="text-center"
            onChange={handleChangeReadTimeUnit}
            type="text"
            name="unit"
            placeholder="Secondi, minuti..."
          />
        </Form.Group>
        {Error.readTime && <Alert variant="danger">{Error.readTime}</Alert>}

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
        {Error.category && <Alert variant="danger">{Error.category}</Alert>}

        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">
            Quale è il titolo del Post?
          </Form.Label>
          <Form.Control
            className="text-center"
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Titolo del post..."
          />
        </Form.Group>
        {Error.title && <Alert variant="danger">{Error.title}</Alert>}

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
        {Error.content && <Alert variant="danger">{Error.content}</Alert>}

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

        {successAlert && (
          <Alert variant="success" className="my-4">
            Post inserito con successo! Verrei rendirizzato a breve..
          </Alert>
        )}

        {/* Mostra lo spinner durante la richiesta */}
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          // Mostra il pulsante "Invia" solo se isLoading è false
          <Button
            className="mt-4"
            onClick={handleSubmit}
            variant="primary"
            type="button">
            Invia
          </Button>
        )}
      </Form>
    </Container>
  );
}
