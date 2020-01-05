import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import SignedInLinks from './SignedInLinks.jsx';
import SignedOutLinks from './SignOutLinks.jsx';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Blogging</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />            
            <Navbar.Collapse id="basic-navbar-nav">
                <SignedInLinks />
                <SignedOutLinks />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;