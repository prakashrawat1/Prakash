import React from "react";
// import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'



var Nav1 = ()=>{

  return (
      <>

<Navbar className="Nav_color" expand="lg">
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#meet">Meet the team</Nav.Link>
        <Nav.Link href="#contact">Contact us</Nav.Link>
        <Nav.Link href="#service">Services</Nav.Link>
        <Nav.Link href="#offer">Special offer</Nav.Link>
        <Nav.Link href="#pet">Pet Relocation</Nav.Link>
        <Nav.Link href="#advice">Pet Advice</Nav.Link>
        <Nav.Link href="#boarding">Boarding</Nav.Link>
        <Nav.Link href="#tour">Take a tour</Nav.Link>
        <Nav.Link href="#employment">Employment</Nav.Link>
        <Nav.Link href="#faq">FAQ</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      </>
  
  );
};
export default Nav1;
