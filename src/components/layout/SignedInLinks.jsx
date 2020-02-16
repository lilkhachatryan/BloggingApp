import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavDropdown, Form, Button, FormControl, Image } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';
import Avatar from '../../assets/images/user.png';
import Logout from "../../pages/Auth/Logout";


const SignedInLinks = () => {
        return(
        <>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                {/*<Button variant="outline-success"><Link to="/addpost">Add Post</Link></Button>*/}
            </Form>
            <Logout />

            <NavDropdown title={
                    <Image src={Avatar} roundedCircle style={{height: 50, width: 50}} className="ml-sm-2"/>
                } id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/addpost">New Story</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Stories</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Reading List</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/">Profile</NavDropdown.Item>
            </NavDropdown>
        </>
    )
}

export default SignedInLinks;