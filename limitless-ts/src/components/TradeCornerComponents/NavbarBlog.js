import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.png";

export default function NavbarBlog() {

  function handleLogout() {
    sessionStorage.removeItem("userLogin");
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top custom-navbar">
      <Container>
        <Navbar.Brand className="me-4 p-0 d-flex align-items-center" href="/">
          <span className="fs-6"> Powered by:</span>
          <div className=" logo-container d-flex justify-content-center align-items-center">
            <Image src={logo} className="img-fluid ms-2" alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link px-3" to="/tradecorner" active={false}>
              Home
            </Link>
            <Link className="nav-link px-4" to="/newpost">
              New Post
            </Link>
          </Nav>

          <Nav className="ms-auto d-flex align-items-center justify-content-center">
            <Link className="nav-link" onClick={handleLogout}>
              Logout
            </Link>
            <Link to="/userposts" className="mx-3 my-1 nav-link rounded-circle user-image d-flex justify-content-center align-items-center">
              <i class="ri-user-fill text-white fs-5"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
