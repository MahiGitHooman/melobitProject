import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="top-navbar">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-dark">
            Melobit App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="li">
              <NavLink to="/" className="text-decoration-none text-dark">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link as="li">
              <NavLink to="/home" className="text-decoration-none text-dark">
                Home
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
