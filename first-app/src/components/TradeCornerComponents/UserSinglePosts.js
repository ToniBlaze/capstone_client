import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function SinglePost({ post, deletePost }) {
  
  return (
    <Col className="my-5" xs={11}>
      <Card className="d-flex flex-row flex-wrap justify-content-center border-0 rounded-4 overflow-hidden">
        <Col
          xs={12}
          md={4}
          className="overflow-hidden"
          style={{ maxHeight: "250px", minHeight: "250px" }}>
          <Card.Img
            className="img-fluid w-100 h-100"
            variant="left"
            src={post.cover}
          />
        </Col>
        <Col xs={8}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              <p>
                Categoria: <b>{post.category}</b>
              </p>
              <p>
                Autore: <b>{post.author.name}</b>
              </p>
            </Card.Text>
            <Link
              className="text-decoration-none text-light"
              to={`/post/${post._id}`}>
              <Button variant="primary mx-3">Leggi post</Button>
            </Link>
            <Button variant="danger" onClick={() => deletePost(post._id)}>
              Elimina
            </Button>
          </Card.Body>
        </Col>
      </Card>
    </Col>
  );
}
