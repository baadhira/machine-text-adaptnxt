import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { second } from '../assets/images/shopifylogo.png'
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand ><img style={{width:"20px",height:"20px"}} src={require("../assets/images/shopifylogo.png")} alt="shopify-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><i class="fa-solid fa-bars"></i></Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><i className="fa-solid fa-moon"></i></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <i class="fa-solid fa-bell"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;