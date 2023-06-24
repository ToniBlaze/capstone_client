import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavbarBlog() {
  let token = localStorage.getItem("userLogin");

  function handleLogout() {
    localStorage.removeItem("userLogin")
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

          <Nav className="ms-auto">
            {/* Se presente TOKEN mostra LOGOUT  */}
            {token ? (
              <Link className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              // Altrimenti mostra LOGIN
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
