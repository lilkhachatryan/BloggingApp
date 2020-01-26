import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button, } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <>
            <Nav className="ml-auto">
                <Link to="/register">
                    <Button variant="outline-success">Signup</Button>
                </Link>
                <Link to="/login">
                    <Button variant="outline-success" className="ml-sm-2">Login</Button>
                </Link>
            </Nav>
        </>
    )
}

export default SignedOutLinks;