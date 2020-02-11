import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Form, Button, FormControl, Image} from 'react-bootstrap';
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
                <Button variant="outline-success"> <Link to="/addpost">Add Post</Link></Button>
            </Form>
            <Logout />
            
            {/*<Image src={Avatar} roundedCircle style={{height: 50, width: 50}} className="ml-sm-2"/>*/}
            <NavDropdown title={
                    <Image src={Avatar} roundedCircle style={{height: 50, width: 50}} className="ml-sm-2"/>
                } id="basic-nav-dropdown" className="mr-5">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </>
    )
}

export default SignedInLinks;