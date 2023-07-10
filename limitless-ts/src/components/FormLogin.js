import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
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
      .post("http://localhost:3000/login", User)
      .then((response) => {
        sessionStorage.setItem("userLogin", response.data);
        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };


  return (
    <>
      <h1 className="text-white">Login</h1>
      <Form className="my-3">
        <Form.Group className="my-4" controlId="formEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={formHandler}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={formHandler}
          />
        </Form.Group>
        {Error ? (
          <Alert key={"danger"} variant={"danger"}>
            {Error.error}
          </Alert>
        ) : (
          ""
        )}
        <Form.Group className="my-4" controlId="formButton">
          <Button className="btn-submit-form" onClick={handleSubmit}>
            Login
          </Button>
        </Form.Group>
        
      </Form>
    </>
  );
}
