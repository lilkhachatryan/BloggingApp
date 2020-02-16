import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import { connect } from 'react-redux';
import { register } from "./action";
import {} from "react-router-dom";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');    

    const handleEmailChange = event => setEmail(event.target.value);
    const handleFirstNameChange = event => setFirstName(event.target.value);
    const handleLastNameChange = event => setLastName(event.target.value);
    const handleUserNameChange = event => setUserName(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);   

    const { register, history } = props;

    const handleSubmit = () => {
      register(email, firstName, lastName, userName, password);
      history.push('/');
    };

    return (
        <>
            <div className="login-container">
                <Form.Row>
                    <Form.Group as={Row} controlId="formGridEmail">
                        <Form.Label column sm={4} className="ml-sm-2">Email</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="email"
                                value={email}
                                placeholder="Enter email"
                                className="ml-sm-2"
                                onChange={handleEmailChange}/>
                        </Col>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Row} controlId="formGridFirstName">
                        <Form.Label column sm={4} className="ml-sm-2">First Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="text"
                                value={firstName}
                                placeholder="Enter First Name"
                                className="ml-sm-2"
                                onChange={handleFirstNameChange}/>
                        </Col>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Row} controlId="formGridLastName">
                        <Form.Label column sm={4} className="ml-sm-2">Last Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="text"
                                value={lastName}
                                placeholder="Enter Last Name"
                                className="ml-sm-2"
                                onChange={handleLastNameChange}/>
                        </Col>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Row} controlId="formGridUserName">
                        <Form.Label column sm={4} className="ml-sm-2">User Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="text"
                                value={userName}
                                placeholder="Enter User Name"
                                className="ml-sm-2"
                                onChange={handleUserNameChange}/>
                        </Col>
                    </Form.Group>
                </Form.Row>


                <Form.Row>
                    <Form.Group as={Row} controlId="formGridPassword">
                        <Form.Label column sm={4} className="ml-sm-2">Password</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="password"
                                value={password}
                                placeholder="Password"
                                className="ml-sm-2"
                                onChange={handlePasswordChange}/>
                        </Col>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Row} controlId="login">
                        <Col sm={10}>
                            <Button
                                variant="outline-success"
                                className="ml-sm-2"
                                size="lg"
                                onClick={handleSubmit}
                            >Register</Button>
                        </Col>
                    </Form.Group>
                </Form.Row>
            </div>
        </>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        register: (email, firstName, lastName, userName, password) => 
            dispatch(register({email, firstName, lastName, userName, password}))
    }
};

export default connect(null, mapDispatchToProps)(Register);