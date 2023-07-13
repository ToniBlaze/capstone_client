import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function NewPost() {
  const [obj, setObj] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [successAlert, setSuccessAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState({});
  const navigate = useNavigate();

  // Back to Home
  const backToHome = () => {
    navigate("/tradecorner");
    window.scrollTo(0, 0);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setObj({
      ...obj,
      [name]: value,
    });
  };

  // Handle file change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // *************************************
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Validation fields
    const { title, content, category, asset } = obj;
    const newErrors = {};

    if (!selectedFile) {
      newErrors.file = "Nessun file caricato!";
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
    if (!asset) {
      newErrors.asset = "Inserisci un asset!";
    }
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    // Set Spinner TRUE
    setIsLoading(true);

    // Take the Token and deconstruct it to find user data
    const token = sessionStorage.getItem("userLogin");
    const decodedToken = jwt_decode(token);
    console.log(decodedToken);
    const author = decodedToken.id;
    console.log(author);

    // Add author to data object
    const newData = {
      ...obj,
      author: author,
    };

    // Upload file to CLOUDINARY
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
        // IF ALL IT'S OK.....

        // Set the URL of the uploaded image as the URL of the post image
        const newObj = {
          ...newData,
          cover: res.data.path,
        };

        // Call POST
        return axios
          .post("http://localhost:3000/posts", newObj, {
            headers: {
              authorization: token,
            },
          })
          .then((res) => {
            // remove ERROR alert
            setError("");

            // Remove SPINNER
            setIsLoading(false);

            // Set Success Alert TRUE
            setSuccessAlert(true);

            setTimeout(() => {
              setSuccessAlert(false);
              navigate("/tradecorner");
            }, 2000);
          })
          .catch((error) => {
            setError(error.response.data);

            // If ERROR, remove Spinner
            setIsLoading(false);

            console.error(error);
          });
      })
      .catch((error) => {
        setError(error.response.data);

        // If ERROR, remove Spinner
        setIsLoading(false);

        console.error(error);
      });
  };
  return (
    <Container className="pb-5">
      <Button className="px-3 py-2 my-4 btn-back" onClick={backToHome}>
        Back to Home
      </Button>
      <h1 className="mt-4 mb-3 text-white ">Aggiungi il tuo Post</h1>
      <Row className="d-flex justify-content-center">
        <Col xs={11} sm={9} md={7} lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="mt-4 mb-2 text-light text-light">
                Che argomento tratta?
              </Form.Label>
              <Form.Select name="category" onChange={handleChange}>
                <option value="">Scegli una categoria</option>
                <option value="Stocks">Stocks</option>
                <option value="Index">Index</option>
                <option value="Forex">Forex</option>
                <option value="Crypto">Crypto</option>
                <option value="Bond">Bond</option>
              </Form.Select>
            </Form.Group>
            {Error.category && <Alert variant="danger">{Error.category}</Alert>}

            <Form.Group className="mb-3">
              <Form.Label className="mt-4 mb-2 text-light">
                Quale Asset stai analizzando?
              </Form.Label>
              <Form.Control
                className="text-center"
                onChange={handleChange}
                type="text"
                name="asset"
                placeholder="Asset..."
              />
            </Form.Group>
            {Error.asset && <Alert variant="danger">{Error.asset}</Alert>}

            <Form.Group className="mb-3">
              <Form.Label className="mt-4 mb-2 text-light">
                Qual'è il titolo del Post?
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
              <Form.Label className="mt-4 mb-2 text-light">
                Scrivi il contenuto del tuo post:
              </Form.Label>
              <Form.Control
                className="text-center"
                onChange={handleChange}
                as="textarea"
                name="content"
                placeholder="Contenuto del post..."
              />
            </Form.Group>
            {Error.content && <Alert variant="danger">{Error.content}</Alert>}

            <Form.Group className="mb-3">
              <Form.Label className="mt-4 mb-2 text-light">
                Carica un'immagine:
              </Form.Label>
              <Form.Control
                className="text-center mb-0"
                onChange={handleFileChange}
                type="file"
                name="uploadFile"
                placeholder="Carica file..."
              />
            </Form.Group>
            {Error.file && <Alert variant="danger">{Error.file}</Alert>}

            {/* SUCCESS ALERT */}
            {successAlert && (
              <Alert variant="success" className="my-4">
                Post inserito con successo! Verrei rendirizzato a breve..
              </Alert>
            )}

            {/* ERROR ALERT */}
            {Error.error ? (
              <Alert key={"danger"} variant={"danger"}>
                {Error.error}
              </Alert>
            ) : (
              ""
            )}

            {/* Show Spinner */}
            {isLoading ? (
              <div className="p-0 m-0 d-flex align-items-center justify-content-center">
                <div className="loader pb-5 mb-5">
                  <div className="loader__bar"></div>
                  <div className="loader__bar"></div>
                  <div className="loader__bar"></div>
                  <div className="loader__bar"></div>
                  <div className="loader__bar"></div>
                  <div className="loader__ball"></div>
                </div>
              </div>
            ) : (
              <Button
                className="mt-3 btn-submit-form"
                onClick={handleSubmit}
                type="button">
                Invia
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
