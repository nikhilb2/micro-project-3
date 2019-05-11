// @flow

import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./navbar.css"
const NavigationBar = (props) => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home"><img className="logo" src={require('../../google.png')} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <div ><Nav.Link style={{color: 'skyblue'}} href="#home" >Overview</Nav.Link></div>
          <Nav.Link style={{color: 'white'}} href="#link">Tech Specs</Nav.Link>
          <Nav.Link style={{color: 'white'}} href="#link">Compare</Nav.Link>
          <Nav.Link style={{color: 'white'}} href="#link">Switch To Pixel</Nav.Link>
  

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default NavigationBar
