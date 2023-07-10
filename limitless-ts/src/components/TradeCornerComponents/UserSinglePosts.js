import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function SinglePost({ post, deletePost }) {
  
  return (
    <Col className="my-5 mx-auto" xs={11} md={10}>
      <Card className="posts-border d-flex flex-row flex-wrap justify-content-center border-0 rounded-4 overflow-hidden">
        <Col
      xs={12}
      lg={6}
          className="overflow-hidden"
          style={{ maxHeight: "300px", minHeight: "300px" }}>
          <Card.Img
            className="img-fluid w-100 h-100"
            variant="left"
            src={post.cover}
          />
        </Col>
        <Col xs={8} lg={6} className="d-flex align-items-center">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              <p>
                Categoria: <b>{post.category}</b>
              </p>
              <p>
                Autore: <b>{post.author.name}</b>
              </p>
              <p>
                Asset: <b>{post.asset}</b>
              </p>
            </Card.Text>
            <Link
              className="text-decoration-none text-light"
              to={`/post/${post._id}`}>
              <Button className="btn-custom mt-4 mx-3">Leggi post</Button>
            </Link>
            <Button className="btn-delete mt-4 mx-3" onClick={() => deletePost(post._id)}>
              Elimina
            </Button>
          </Card.Body>
        </Col>
      </Card>
    </Col>
  );
}
