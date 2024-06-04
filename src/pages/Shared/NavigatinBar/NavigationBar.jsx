import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const NavigationBar = () => {
  const user = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" className="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to={"/category/0"}>Home</Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">career</Nav.Link>
            </Nav>
            <Nav>
              {
                user && <FaUser style={{ fontSize: "2rem" }}>
                </FaUser>
              }

              {
                 user ? <Button variant="secondary">logOut</Button> :
                <Link to="/login">
                   <Button variant="secondary">login</Button>
                </Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
