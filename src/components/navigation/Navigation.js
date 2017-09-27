import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (

        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">My Travel Site</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
            <NavItem eventKey={3} href="#">Stuff</NavItem>
            <NavItem eventKey={4} href="#">Contact</NavItem>
          </Nav>
        </Navbar>

    );
  }
}

export default Navigation;