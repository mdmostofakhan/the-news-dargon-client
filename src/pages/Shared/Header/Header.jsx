import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='mt-4'>
           
           <div className='text-center'>
                    <img src={logo} alt="" />
                    <p className='text-secondary'> <small>Journalism Without Fear or Favour</small></p>
                     <p>{moment().format('dddd, MMMM D, YYYY')}</p>
                   
          </div>
             <div className='d-flex'>
                  <Button variant="danger">Latest</Button>
                  <Marquee speed={100} direction={"left"} className='text-danger'>
                     I can be a React component, multiple React components, or just some
                      text......            can be a React component, multiple React components, or just some
                </Marquee>
            </div>
            <div>
      <Navbar collapseOnSelect expand="lg" bg="light" className="light">
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">career</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">login</Button>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
   </Navbar>
             </div>
        </Container>
    );
};

export default Header;