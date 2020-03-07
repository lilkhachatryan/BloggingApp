import React from 'react';
import { Navbar } from 'react-bootstrap';
import SignedInLinks from './SignedInLinks.jsx';
import SignedOutLinks from './SignOutLinks.jsx';

const Header = (props) => {
    const {isAuthenticated, user} = props;
    const isUser = !!Object.keys(user).length;

    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="/"> <h3>Blogging</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />            
            <Navbar.Collapse id="basic-navbar-nav">
                {isAuthenticated && isUser && <SignedInLinks user={user}/>}
                {!isAuthenticated && <SignedOutLinks />}
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;