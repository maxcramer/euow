import React from "react";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import logoTartan from "../media/logoTartan.png";

import "./Navbar.css";
const path = window.location.pathname;
const NavBar = (props) => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <span className="branding_container">
          {/* <img
            id="nav-logo"
            src={logoTartan}
            alt="FLoat The Highlands Logo - Tartan"
          /> */}
          <h4 className="dates">Logo</h4>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/rules&regs">Q&A</Nav.Link>
          {/* <Nav.Link href="/sponsors">Sponsors</Nav.Link> */}
          <NavDropdown title="Events" id="basic-nav-dropdown">
            <NavDropdown.Item href="/fth">Float The Highlands</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/fi">Float Italia</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/sor">
              Suisse Onewheel Racing
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/oa">Onewheel Algarve</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/wow">WOW</NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
