import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



export const Navigation = () => {
  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="">ResolveHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Login/Signup</Nav.Link>
            <Button variant="outline-danger">Register a Compliant</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  
    </>
  )
}

    
