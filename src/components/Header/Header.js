import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../../images/hcih-logo.png'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavDropdown.Item href="#sign-in">Sign In</NavDropdown.Item>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    {/* <Nav.Link to="/">Home</Nav.Link> */}
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="light" variant="light" expand="lg">
    <Navbar.Brand href="#home">
      <img
        src={Logo}
        width="50"
        height="50"
        className="d-inline-block align-top mr-3"
        alt="NC"
      />
      NGO Volunteer Connect
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {alwaysOptions}
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="m-2" />
        <Button variant="outline-success" className="m-2">Search</Button>
      </Form>
      <NavDropdown id="basic-nav-dropdown" title={<img src="https://icongr.am/clarity/login.svg?size=30&color=ffffff" alt="Admin" />}>
        {user ? authenticatedOptions : unauthenticatedOptions}
      </NavDropdown>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
