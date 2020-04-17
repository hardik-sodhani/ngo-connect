import React, {Fragment} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../images/hcih-logo.png';

const authenticatedOptions = (
  <Fragment>
    <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
  </Fragment>
);

const unauthenticatedOptions = (
  <Fragment>
    <NavDropdown.Item href="#sign-in">Sign In</NavDropdown.Item>
  </Fragment>
);

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#home">HOME</Nav.Link>
    <Nav.Link href="#volunteer/openings">WANT TO VOLUNTEER</Nav.Link>
    <Nav.Link href="#volunteer/signup">NEED TO VOLUNTEER</Nav.Link>
    <Nav.Link href="#contact">CONTACT US</Nav.Link>
  </Fragment>
);

const Header = ({user}) => (
  <Fragment>
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-top mr-3"
          alt="NC"
        />
        <span className="ml-md-5">HOW CAN I HELP?</span>
      </Navbar.Brand>
    </Navbar>
    <Navbar bg="white" variant="light" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">{alwaysOptions}</Nav>
        <NavDropdown
          id="basic-nav-dropdown"
          title={
            <img
              src="https://icongr.am/clarity/login.svg?size=30&color=ffffff"
              alt="Admin"
            />
          }
        >
          {user ? authenticatedOptions : unauthenticatedOptions}
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  </Fragment>
);

export default Header;
