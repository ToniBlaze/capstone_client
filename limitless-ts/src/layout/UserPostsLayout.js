import React from 'react'
import { Container, Row } from "react-bootstrap";
import UserPosts from '../components/TradeCornerComponents/UserPosts';
import NavbarBlog from '../components/TradeCornerComponents/NavbarBlog';

export default function UserPostsLayout() {
  return (
    <>
    <NavbarBlog />
    <Container className="my-5">
      <Row className="d-flex align-items-center justify-content-center">
        <UserPosts />
      </Row>
    </Container>
    </>
  )
}
