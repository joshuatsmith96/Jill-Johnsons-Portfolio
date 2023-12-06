import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import './NavMenu.css'

function NavMenu() {

    return (
        <Navbar key={"sm"} expand={"sm"}>
          <Container className="nav-content" fluid>
            <Navbar.Brand className="nav-brand" href="#">
                <h1>JILL JOHNSON</h1>
                <p>Photography</p>
            </Navbar.Brand>
            <Navbar.Toggle className="navButton" aria-controls={`offcanvasNavbar-expand-${"sm"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"sm"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"sm"}`}>
                  Navigation
                </Offcanvas.Title>
              </Offcanvas.Header>
              <span className="nav-divider"></span>
              <Offcanvas.Body>
                <Nav className="nav-links justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/" className="navlink">Home</Nav.Link>
                  <Nav.Link as={Link} to="/services" className="navlink">Services</Nav.Link>
                  <Nav.Link as={Link} to="/About" className="navlink">About</Nav.Link>
                  <Nav.Link as={Link} to="/Testimonials" className="navlink">Testimonials</Nav.Link>
                  <Nav.Link as={Link} to="/Contact" className="navlink">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
  }
  
  export default NavMenu
  