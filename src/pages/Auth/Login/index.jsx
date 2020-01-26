import {TextField} from '@material-ui/core';
import React, { useState } from "react";
import { connect } from "react-redux";
import {Link, Redirect} from "react-router-dom";
import { loginUser } from "./actions";
import { Button, Form, Col, Row } from "react-bootstrap";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);
    const { classes, loginError, isAuthenticated, loginUser } = props;


    const handleSubmit = () => {
        // const { dispatch } = props;
        // dispatch(loginUser(email, password));
        loginUser(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/" />;
    } else {
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
                                >Login</Button>
                            </Col>
                        </Form.Group>
                    </Form.Row>
                </div>
            </>
        )
    }
}

const  mapStateToProps = (state) => {
    return {
      isLoggingIn: state.login.isLoggingIn,
      loginError: state.login.loginError,
      isAuthenticated: state.login.isAuthenticated
    };
};

const actionCreators = {
    loginUser,
};

export default connect(mapStateToProps, actionCreators)(Login);