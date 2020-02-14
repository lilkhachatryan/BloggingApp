import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import SignedInLinks from './SignedInLinks.jsx';
import SignedOutLinks from './SignOutLinks.jsx';

const Header = (props) => {
    const {isAuthenticated} = props;
    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="/"> Blogging</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />            
            <Navbar.Collapse id="basic-navbar-nav">
                {isAuthenticated && <SignedInLinks />}
                {!isAuthenticated && <SignedOutLinks />}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;