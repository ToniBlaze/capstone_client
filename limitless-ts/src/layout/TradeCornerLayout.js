import { Container, Row } from "react-bootstrap";
import Posts from "../components/TradeCornerComponents/Posts";
import NavbarBlog from "../components/TradeCornerComponents/NavbarBlog";

export default function TradeCornerLayout() {
  return (
    <>
    <NavbarBlog />
    <Container className="my-5">
      <Row className="d-flex align-items-center justify-content-center">
        <Posts />
      </Row>
    </Container>
    </>
  );
}
