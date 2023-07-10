import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import logo from "../assets/Logo.png";

export default function MyNav() {
  const [token, setToken] = useState(localStorage.getItem("userLogin"));

  function handleLogout() {
    localStorage.removeItem("userLogin");
    setToken(null);
  }

  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      className="sticky-top custom-navbar">
      <Container>
        <Navbar.Brand
          className="me-4 p-0"
          href="/">
          <div className=" logo-container d-flex justify-content-center align-items-center">
            <Image src={logo} className="img-fluid" alt="Logo" />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="#home" active={false}>
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="#products" active={false}>
              Prodotti
            </Nav.Link>
            <Nav.Link className="nav-link" href="#team" active={false}>
              Chi siamo
            </Nav.Link>
            <Link className="nav-link" to="/tradecorner">
              TradeCorner
            </Link>
          </Nav>

          <Nav className="ms-auto">
            {/* Se presente TOKEN mostra LOGOUT  */}
            {!token ? (
              <>
                <Link className="nav-link" to="/register">
                  Sign In
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </>
            ) : (
              <Link className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
