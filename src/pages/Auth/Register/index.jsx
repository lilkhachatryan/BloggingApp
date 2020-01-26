import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import { connect } from 'react-redux';
import { register } from "./action";
import {} from "react-router-dom";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

    const { register, history } = props;

    const handleSubmit = () => {
      register(email, password);
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
        register: (email, password) => dispatch(register({email, password}))
    }
};

export default connect(null, mapDispatchToProps)(Register);