import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import { connect } from 'react-redux';
import { register } from "./action";
import {} from "react-router-dom";
import useForm from "../../../utils/useForm";
import validateRegistr from "./validateRegistr";

const Register = (props) => {

    const { values, errors, handleChange, handleSubmit } = useForm(submit, validateRegistr, 
        {email: '', firstName: '', lastName: '', userName: '', password: '', repeatPassword : ''});
    //const [email, setEmail] = useState('');
    //const [firstName, setFirstName] = useState('');
    //const [lastName, setLastName] = useState('');
    //const [userName, setUserName] = useState('');
    //const [password, setPassword] = useState('');    

    //const handleEmailChange = event => setEmail(event.target.value);
    //const handleFirstNameChange = event => setFirstName(event.target.value);
    //const handleLastNameChange = event => setLastName(event.target.value);
    //const handleUserNameChange = event => setUserName(event.target.value);
    //const handlePasswordChange = event => setPassword(event.target.value);   
    const { register, history } = props;
    function submit() {
        register(values).then(() => {
            history.push('/');
        });
    }
    
    // const handleSubmit = () => {
    //   register(email, firstName, lastName, userName, password);
    //   history.push('/');
    // };

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
                    <Form.Group as={Row} controlId="formGridFirstName">
                        <Form.Label column sm={4} className="ml-sm-2">First Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                placeholder="Enter First Name"
                                className={
                                    {
                                        "ml-sm-2": true,
                                        "inputError": errors.firstName
                                    }
                                }
                                onChange = {handleChange}/>
                                {errors.firstName && <p className="ml-sm-2 error">{errors.firstName}</p>}
                        </Col>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Row} controlId="formGridLastName">
                        <Form.Label column sm={4} className="ml-sm-2">Last Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                placeholder="Enter Last Name"
                                className={
                                    {
                                        "ml-sm-2": true,
                                        "inputError": errors.lastName
                                    }
                                }
                                onChange={handleChange}/>
                                {errors.lastName && <p className="ml-sm-2 error">{errors.lastName}</p>}
                        </Col>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Row} controlId="formGridUserName">
                        <Form.Label column sm={4} className="ml-sm-2">User Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="text"
                                name="userName"
                                value={values.userName}
                                placeholder="Enter User Name"
                                className={
                                    {
                                        "ml-sm-2": true,
                                        "inputError": errors.userName
                                    }
                                }
                                onChange={handleChange}/>
                                {errors.userName && <p className="ml-sm-2 error">{errors.userName}</p>}
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
                    <Form.Group as={Row} controlId="formGridRepeatPassword">
                        <Form.Label column sm={4} className="ml-sm-2">Repeat Password</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="password"
                                name="repeatPassword"
                                value={values.repeatPassword}
                                placeholder="Repeat Password"
                                className={
                                    {
                                        "ml-sm-2": true,
                                        "inputError": errors.repeatPassword
                                    }
                                }
                                onChange={handleChange}/>
                                {errors.repeatPassword && <p className="ml-sm-2 error">{errors.repeatPassword}</p>}
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
        register: (values) => dispatch(register({...values}))
    }
};

export default connect(null, mapDispatchToProps)(Register);