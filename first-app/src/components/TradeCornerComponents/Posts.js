import React from "react";
import { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import axios from "axios";

// COMPONENTS
import SinglePost from "./SinglePost";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [Error, setError] = useState(null);

  const token = localStorage.getItem("userLogin");

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts", {
        headers: {
          authorization: token,
        }
      } )
      .then((response) => {setPosts(response.data)
      setError(null)})
      .catch((err) => {
        console.log(err);
        setError(err.response.data);
        setTimeout(() => {
          navigate("/login");
        }, 1300);
      });
  }, []);


  return (
    <Container>
      <Row className="justify-content-center">
        {Error ? (
          <Alert key={"danger"} variant={"danger"}>
            {Error.error}
          </Alert>
        ) : (
          posts &&
          posts.map((post) => (
            <SinglePost post={post} key={post._id} />
          ))
        )}
      </Row>
    </Container>
  );
}
