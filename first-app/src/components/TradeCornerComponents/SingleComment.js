import { Row, Col, Button, Container } from "react-bootstrap";
import ChangeComment from "./ChangeComment";

export default function SingleComment({ item, key, postId, deleteComment, setCommentsCount }) {
  
    return (
      <Container className="my-4 p-1" index={key}>
        <Row className="border-custom py-2 comments-border flex-wrap">
          <Col xs={12} md={9} className="d-flex align-items-center">
            <Col>
              Autore: <b className="text-secondary">{item.author.name}</b>
            </Col>
            <Col>
              Commento: <b className="text-secondary">"{item.content}"</b>
            </Col>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-center my-3"
            xs={12} md={3}>
            <Button
             onClick={() => deleteComment(postId, item._id)}
              className="btn btn-danger">
              Elimina
            </Button>
            <ChangeComment postId={postId} item={item} commentId={item._id} setCommentsCount={setCommentsCount} />
          </Col>
        </Row>
      </Container>
    );
  }
  