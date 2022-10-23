import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-10 " fixed="top">
    <Container>
      <Navbar.Brand href="#"><Link style={{color:'white', textDecoration:'none',}} to="/">CyanFox</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/">Clients</Nav.Link>
          <Nav.Link href="/add-company">Add Company</Nav.Link>
          <Nav.Link href="/analytics">Analytics</Nav.Link>
          
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Menu