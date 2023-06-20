import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterForm() {
  const [User, setUser] = useState({});
  const [Error, setError] = useState(null);
  const navigate = useNavigate();

  const formHandler = (event) => {
    setUser({
      ...User,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/register", User)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data);
        console.error(error);
      });
  };

  return (
    <Form className="my-3">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={formHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastname">
        <Form.Control
          type="text"
          name="lastname"
          placeholder="Enter lastname"
          onChange={formHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
        <Form.Control
          type="text"
          name="age"
          placeholder="Enter age"
          onChange={formHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Form.Control
          type="text"
          name="city"
          placeholder="Enter city"
          onChange={formHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={formHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={formHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formButton">
        <Button variant="dark" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Group>
      {Error ? (
        <Alert key={"danger"} variant={"danger"}>
          {Error.error}
        </Alert>
      ) : (
        ""
      )}
    </Form>
  );
}
