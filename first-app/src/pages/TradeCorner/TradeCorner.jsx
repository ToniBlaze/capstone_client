import React from "react";
import { Container } from "react-bootstrap";

import TradeCornerLayout from "../../layout/TradeCornerLayout";
import UserPostsLayout from "../../layout/UserPostsLayout";

export default function TradeCorner() {
  const showUserPosts = window.location.pathname === "/userposts";

  return (
    <Container fluid className="m-0 p-0 bg-black">
      {showUserPosts ? <UserPostsLayout /> : <TradeCornerLayout />}
    </Container>
  );
}
