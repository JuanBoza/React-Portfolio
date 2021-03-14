import React from "react";
import "./footer.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Footer = () => (
  <div className="footer">
   
    <Navbar.Brand href="/profile">Links </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    
      <Nav className="mr-auto">
        <Nav.Link href="https://github.com/JuanBoza">Github</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/feed/">LinkedIn</Nav.Link>
          <Nav.Link href="mailto: JuanBoza80@gmail.com">Resume</Nav.Link>

      </Nav>
    
  
  </div>
);

export default Footer;
