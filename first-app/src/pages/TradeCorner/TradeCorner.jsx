import React from "react";
import { Container, Row } from "react-bootstrap";

import Posts from "../../components/TradeCornerComponents/Posts";
import UserPosts from "../../components/TradeCornerComponents/UserPosts";
import NavbarBlog from "../../components/TradeCornerComponents/NavbarBlog";

export default function TradeCorner() {

  return (
    <Container fluid className="m-0 p-0 bg-black">
      <NavbarBlog />
      
      <Container className="my-5">
        <Row className="d-flex align-items-center justify-content-center">
        <Posts />
        <UserPosts />
        </Row>
      </Container>
    </Container>
  );
}
