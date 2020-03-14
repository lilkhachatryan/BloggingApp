import React from 'react';
import { Navbar } from 'react-bootstrap';
import SignedInLinks from './SignedInLinks.jsx';
import SignedOutLinks from './SignOutLinks.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
    const {isAuthenticated, user} = props;
    const isUser = !!Object.keys(user).length;

    return (
        <Navbar bg="light" expand="md" className="pr-4">
            <Navbar.Brand href="/" className="d-flex">
                <FontAwesomeIcon icon={faBlog} size="2x"/>
                <h3 className="ml-2 mb-0">Blogging</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />            
            <Navbar.Collapse id="basic-navbar-nav">
                {isAuthenticated && isUser && <SignedInLinks user={user}/>}
                {!isAuthenticated && <SignedOutLinks />}
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;