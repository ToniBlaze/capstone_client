import { Row, Col, Button, Container } from "react-bootstrap";
import ChangeComment from "./ChangeComment";
import jwt_decode from "jwt-decode";

export default function SingleComment({
  item,
  key,
  postId,
  deleteComment,
  setCommentsCount,
}) {
  console.log(item.author._id);

  // Take the Token and deconstruct it to find user data
  const token = sessionStorage.getItem("userLogin");
  const decodedToken = jwt_decode(token);
  console.log(decodedToken.id);

  const isCommentOfUser = item.author._id === decodedToken.id;

  return (
    <Container className="my-4 p-1" index={key}>
      <Row className="py-2 comments-border justify-content-center">
        <Col xs={12} md={9} className="d-flex flex-wrap align-items-center">
          <Col xs={12} className="text-secondary">
            Autore: <b className="text-white">{item.author.name}</b>
          </Col>
          <Col xs={12}  className="text-secondary">
            Commento: <b className="text-white">"{item.content}"</b>
          </Col>
        </Col>

        {isCommentOfUser && (
          <Col
            className="d-flex align-items-center justify-content-center my-3"
            xs={12}
            md={3}>
            <Button
              onClick={() => deleteComment(postId, item._id)}
              className="btn btn-danger btn-sm">
              Elimina
            </Button>
            <ChangeComment
              postId={postId}
              item={item}
              commentId={item._id}
              setCommentsCount={setCommentsCount}
            />
          </Col>
        )}
      </Row>
    </Container>
  );
}
