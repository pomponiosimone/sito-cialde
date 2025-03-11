import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import LogoCialde from '../assets/logocialde.webp';
import Logo from '../assets/logo1.jpg';

function NavBar() {
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
            src={Logo}
            alt="Logo Cialde"
            style={{ width: '60px', height: '60px', marginRight: '10px', borderRadius: '50px' }}
          /> Horus Caffè
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cialde">
            <img
                src={LogoCialde}
                alt="Logo Cialde"
                style={{ width: '30px', height: '30px', marginLeft: '20px', marginRight: '10px' }}
              />
               Tutte le Cialde
            
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
