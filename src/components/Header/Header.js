import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'

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
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">
      <img
        src="/welfare-logo.png"
        width="40"
        height="40"
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
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <NavDropdown id="basic-nav-dropdown" className="float-right" title={<img src="https://icongr.am/clarity/login.svg?size=30&color=ffffff" alt="Admin" />}>
        {user ? authenticatedOptions : unauthenticatedOptions}
      </NavDropdown>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
