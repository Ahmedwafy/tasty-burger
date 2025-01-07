import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { Link as spyLink } from "react-scroll";

import "../../Styles/HeaderStyle.css";

function Header() {
  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    // next line gives the amount of pixels the document has been scrolled vertically.
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      {/* 
      If Nav === true apply className ='sticky'

      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
        > 
        
        OR
        */}
      <Navbar collapseOnSelect expand="lg" className={nav ? "sticky" : ""}>
        <Container>
          <Navbar.Brand>
            <Link className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                activeClass="active"
                as={spyLink}
                to="home"
                spy={true}
                smooth={true}
              >
                Home
              </Nav.Link>
              <Nav.Link as={spyLink} to="about" spy={true} smooth={true}>
                About
              </Nav.Link>
              <Nav.Link as={spyLink} to="menu" spy={true} smooth={true}>
                Our Menu
              </Nav.Link>
              <Nav.Link as={spyLink} to="shop" spy={true} smooth={true}>
                Shop
              </Nav.Link>
              <Nav.Link as={spyLink} to="blog" spy={true} smooth={true}>
                Blog
              </Nav.Link>
              <Nav.Link as={spyLink} to="contact" spy={true} smooth={true}>
                Contact
              </Nav.Link>
              <Nav.Link as={spyLink} to="home">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
