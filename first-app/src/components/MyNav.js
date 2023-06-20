import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function MyNav() {

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand className="me-4" href="/">
          Limit-Logo
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
            <Link className="nav-link px-4" to="/newpost">
              New Post
            </Link>
          </Nav>
          <Nav className="ms-auto">
            <Link className="nav-link" to="/register">
              Sign In
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
