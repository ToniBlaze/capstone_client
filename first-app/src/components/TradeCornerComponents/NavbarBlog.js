import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavbarBlog() {

  function handleLogout() {
    localStorage.removeItem("userLogin");
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand className="me-4" href="/">
          <span> Powered by:</span>
          Limit-Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link px-3" href="#home" active={false}>
              Home
            </Nav.Link>
            <Link className="nav-link px-4" to="/newpost">
              New Post
            </Link>
          </Nav>

          <Nav className="ms-auto d-flex align-items-center justify-content-center">
            <Link className="nav-link" onClick={handleLogout}>
              Logout
            </Link>
            <Link to="/userposts" className="mx-3 nav-link rounded-circle user-image d-flex justify-content-center align-items-center">
              <i class="ri-user-fill text-white fs-5"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
