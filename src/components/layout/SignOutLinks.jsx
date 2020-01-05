import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button, } from 'react-bootstrap';

const SignedOutLinks = () => {
    return (
        <>
            <Nav className="ml-auto">
                <Button variant="outline-success">Signup</Button>
                <Button variant="outline-success" className="ml-sm-2">Login</Button>
            </Nav>
        </>
    )
}

export default SignedOutLinks;