import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect} from "react-router-dom";
import { loginUser } from "./actions";
import { Button, Form, Col, Row } from "react-bootstrap";
import useForm from "../../../utils/useForm";
import validateLogin from "./validateLogin";

function Login(props) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    //
    // const handleEmailChange = event => setEmail(event.target.value);
    // const handlePasswordChange = event => setPassword(event.target.value);
    const { classes, loginError, isAuthenticated, loginUser } = props;

    const { values, errors, handleChange, handleSubmit } = useForm(submit, validateLogin, {email: '', password: ''});

    function submit() {
        loginUser(values.email, values.password);
    }

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
                                    name="email"
                                    value={values.email}
                                    placeholder="Enter email"
                                    className={
                                        {
                                            "ml-sm-2": true,
                                            "inputError": errors.email
                                        }
                                    }
                                    onChange={handleChange}/>
                                {errors.email && <p className="ml-sm-2 error">{errors.email}</p>}
                            </Col>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Row} controlId="formGridPassword">
                            <Form.Label column sm={4} className="ml-sm-2">Password</Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    placeholder="Password"
                                    className={
                                        {
                                            "ml-sm-2": true,
                                            "inputError": errors.password
                                        }
                                    }
                                    onChange={handleChange}/>
                                {errors.password && <p className="ml-sm-2 error">{errors.password}</p>}
                            </Col>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Row} controlId="login">
                            <Col sm={10}>
                                <Button
                                    variant="outline-success"
                                    className="ml-sm-2"
                                    size="1g"
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
    loginUser
};

export default connect(mapStateToProps, actionCreators)(Login);