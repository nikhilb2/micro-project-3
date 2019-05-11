// @flow

import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./navbar.css"
const NavigationBar = (props) => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#deets">About</Nav.Link>
          <Nav.Link href="#memes">
            Work
          </Nav.Link>
          <Nav.Link href="#memes">
          Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default NavigationBar
