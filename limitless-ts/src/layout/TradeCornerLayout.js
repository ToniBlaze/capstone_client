import { Container, Row } from "react-bootstrap";
import Posts from "../components/TradeCornerComponents/Posts";
import NavbarBlog from "../components/TradeCornerComponents/NavbarBlog";
import BlogTitle from "../components/TradeCornerComponents/BlogTitle";

export default function TradeCornerLayout() {
  return (
    <>
    <NavbarBlog />
    <Container className="my-5">
      <Row className="d-flex align-items-center justify-content-center">
        <BlogTitle />
        <Posts />
      </Row>
    </Container>
    </>
  );
}
