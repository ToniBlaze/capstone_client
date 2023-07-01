import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function SinglePost({ post }) {
  return (
    <Col className="my-5 mx-auto" xs={11} md={10}>
      <Card className="d-flex posts-border flex-row flex-wrap justify-content-center border-0 rounded-4 overflow-hidden ">
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
        <Col xs={8} lg={6} className="d-flex align-items-center" >
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
              <Button className="btn-custom mt-4">Leggi post</Button>
            </Link>
          </Card.Body>
        </Col>
      </Card>
    </Col>
  );
}
