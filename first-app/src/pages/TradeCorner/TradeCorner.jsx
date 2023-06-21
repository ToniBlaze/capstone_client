import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate, Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Posts from "../../components/TradeCornerComponents/Posts";
import UserPosts from "../../components/TradeCornerComponents/UserPosts";
import NavbarBlog from "../../components/TradeCornerComponents/NavbarBlog";

export default function TradeCorner() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  // Verifica la presenza del token nel localStorage
  useEffect(() => {
    const verifyToken = () => {
      const token = localStorage.getItem("userLogin");
      if (!token) {
        navigate("/");
      } else {
        // Decodifica JWT per trovare userID
        const decodedToken = jwt_decode(token);
        setUserId(decodedToken.id);
        console.log(userId);
      }
    };

    verifyToken();
  }, [userId]);

  return (
    <>
      <NavbarBlog />
      <Container className="my-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Routes>
            <Route path="/" element={<Posts />} />
            {userId && (
              <Route
                path="/userposts"
                element={<UserPosts userId={userId} />}
              />
            )}
            
          </Routes>
        </Row>
      </Container>
    </>
  );
}
