import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavDropdown, Form, Button, FormControl, Image } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';
import Avatar from '../../assets/images/user.png';
import Logout from "../../pages/Auth/Logout";
// import { connect } from "react-redux";


const SignedInLinks = (props) => {
    const { user } = props;
    let defaultAvatar = user.firstName.charAt(0) + user.lastName.charAt(0);
    defaultAvatar = defaultAvatar.toUpperCase();
    return(
        <>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Logout />

            <NavDropdown title={
                    user.avatar ? <Image src={Avatar} roundedCircle style={{height: 50, width: 50}} className="ml-sm-2"/>
                    : <div style={{
                                height: 50,
                                width: 50,
                                borderRadius: '50%',
                                backgroundColor: '#007bff',
                                textAlign: 'center',
                                fontSize: 26,
                                color: '#fff'
                            }}
                           className="ml-sm-2">{defaultAvatar}</div>
                } id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/addpost">New Story</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/posts">Stories</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Reading List</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/">Profile</NavDropdown.Item>
            </NavDropdown>
        </>
    )
};

export default SignedInLinks;