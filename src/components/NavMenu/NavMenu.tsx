import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import "./NavMenu.css";

function NavMenu() {

  const location = useLocation();
  useEffect(() => {
    //Get All Locations
    let allLinks = document.getElementsByClassName("desktop-links")[0].children;
    //Reset selected styles
    for (let i = 0; i <= allLinks.length - 1; i++) {
      //The link being checked
      let link = allLinks[i].attributes[1].value

      //Where we currently are on the page
      let currentLink = location.pathname
      if (allLinks[i].id === "active") {
        allLinks[i].removeAttribute("id")
      }
      if (currentLink === link) {
        console.log("TRUE")
        allLinks[i].setAttribute("id", "active")
      } else {
        console.log("FALSE")
      }
    }


  }, [location]);


  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => setMenuOpen(false);

  return (
    <Navbar key={"sm"} expand={"sm"}>
      <Container className="nav-content" fluid>
        <Navbar.Brand
          as={Link}
          to={"/Jill-Johnsons-Portfolio"}
          className="nav-brand"
          href="#"
        >
          <h1>JILL JOHNSON</h1>
          <p>Photography</p>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={toggleMenu}
          className="navButton"
          aria-controls={`offcanvasNavbar-expand-${"sm"}`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${"sm"}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
          placement="end"
          restoreFocus={false}
          show={menuOpen}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"sm"}`}>
              Navigation
            </Offcanvas.Title>
          </Offcanvas.Header>
          <span className="nav-divider"></span>
          <Offcanvas.Body>
            <Nav className="nav-links justify-content-end flex-grow-1 pe-3">
              <div className="mobile-links">
                <Nav.Link
                  as={Link}
                  to="/Jill-Johnsons-Portfolio"
                  className="navlink"
                  onClick={toggleMenu}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Jill-Johnsons-Portfolio/services"
                  className="navlink"
                  onClick={toggleMenu}
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Jill-Johnsons-Portfolio/About"
                  className="navlink"
                  onClick={toggleMenu}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Jill-Johnsons-Portfolio/Testimonials"
                  className="navlink"
                  onClick={toggleMenu}
                >
                  Testimonials
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Jill-Johnsons-Portfolio/Contact"
                  className="navlink"
                  onClick={toggleMenu}
                >
                  Contact
                </Nav.Link>
              </div>
              <div className="desktop-links">
                <Nav.Link
                  as={Link}
                  to="/Jill-Johnsons-Portfolio"
                  className="navlink"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Jill-Johnsons-Portfolio/services"
                  className="navlink"
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Jill-Johnsons-Portfolio/About"
                  className="navlink"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Jill-Johnsons-Portfolio/Testimonials"
                  className="navlink"
                >
                  Testimonials
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Jill-Johnsons-Portfolio/Contact"
                  className="navlink"
                >
                  Contact
                </Nav.Link>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
