import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Menu(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark" pb-10>
        <Navbar.Brand href="#home">
          {" "}
          Pathfinding Visualizer Application
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#ykdv">YKDV</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Menu;
