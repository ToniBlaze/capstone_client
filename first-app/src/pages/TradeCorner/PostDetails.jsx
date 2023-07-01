import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import CommentArea from "../../components/TradeCornerComponents/CommentArea";

//PAGINA (ROUTE) PRINCIPALE DEL LIBRO
export default function PostDetails() {
  const navigate = useNavigate();

  //Torna ad Home
  const backToHome = () => {
    navigate("/tradecorner");
    window.scrollTo(0, 0);
  };

  //Prendi "ID" da paramentro della ROUTE
  let { id } = useParams();

  const [post, setPost] = useState(null);

  // Chiamata per Dati del POST
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <Container fluid>
      <Button className="px-4 py-2 my-4 btn-back" onClick={backToHome}>
        Back to Home
      </Button>
      {post && (
        <>
          <Row>
            <h1 className="mt-3 pb-2 text-light">{post.title}</h1>
            <Col xs={12} className="mx-0  overflow-hidden">
              <img
                className="img-fluid img-book-details rounded-3"
                src={post.cover}
                alt="img-post"
              />
            </Col>
            <Col xs={12} className="text-secondary mt-3">
              <h4 className="mt-3">
                Autore: <b className="text-white">{post.author.name}</b>
              </h4>
              <h4 className="mt-3">
                Categoria: <b className="text-white">{post.category}</b>
              </h4>
              <h4 className="mt-3">
                Asset: <b className="text-white">{post.asset}</b>
              </h4>

              <p className="text-secondary mt-3">
                <i>{post.content}</i>
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} className="mt-4">
              <CommentArea id={id} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
