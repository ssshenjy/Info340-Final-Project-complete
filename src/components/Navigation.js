import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <NavLink to="/introduction" className="navbar-brand">Journemo: Your Travel Planner</NavLink>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/Input">Start</Nav.Link>
            <Nav.Link as={NavLink} to="/AddEvent">Add</Nav.Link>
            <Nav.Link as={NavLink} to="/Planner">Plan</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/SignUp">Sign Up</Nav.Link>
            <Nav.Link as={NavLink} to="/LogIn">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
