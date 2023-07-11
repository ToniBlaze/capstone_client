import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import CommentArea from "../../components/TradeCornerComponents/CommentArea";

//PAGINA (ROUTE) PRINCIPALE DEL LIBRO
export default function PostDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  //Prendi "ID" da paramentro della ROUTE
  let { id } = useParams();

  //Torna ad Home
  const backToHome = () => {
    navigate("/tradecorner");
    window.scrollTo(0, 0);
  };

  // Chiamata per Dati del POST
  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <Container fluid>
      <Button className="px-4 py-2 my-4 btn-back" onClick={backToHome}>
        Back to Home
      </Button>
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
        post && (
          <>
            <Row>
              <h1 className="mt-3 pb-2 text-light">{post.title}</h1>
              <Col xs={12} className="mx-0 px-5 overflow-hidden">
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

                <p className="text-light mt-4 px-5 mx-5 break-words">
                  {post.content}
                </p>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="mt-4">
                <CommentArea id={id} />
              </Col>
            </Row>
          </>
        )
      )}
    </Container>
  );
}
