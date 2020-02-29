// import React, {useState} from "react";
// import {Button, Col, Form, Row} from "react-bootstrap";
// import { connect } from 'react-redux';
// import {} from "react-router-dom";
// import useForm from "../utils/useForm";
// import validateRegistr from "../../src/pages/Auth/Register/validateRegistr";



// function EditProfile(props) {
//     const { register, history } = props;

//     const { values, errors, handleChange, handleSubmit } = useForm(submit, validateRegistr, 
//         {email: '', firstName: '', lastName: '', userName: '', password: '', repeatPassword : ''});

//     function submit() {
//         register(values).then(() => {
//             history.push('/');
//         });
//     }
//     return (
        
//          <div className="login-container">
//             <Form.Row>
//                 <Form.Group as={Row} controlId="formGridEmail">
//                     <Form.Label column sm={4} className="ml-sm-2">Email</Form.Label>
//                     <Col sm={8}>
//                         <Form.Control
//                             type="email"
//                             name="email"
//                             value={values.email}
//                             placeholder="Enter email"
//                             className={
//                                 {
//                                     "ml-sm-2": true,
//                                     "inputError": errors.email
//                                 }
//                             }
//                             onChange={handleChange}/>
//                         {errors.email && <p className="ml-sm-2 error">{errors.email}</p>}
//                     </Col>
//                 </Form.Group>
//             </Form.Row>
//             <Form.Row>
//                 <Form.Group as={Row} controlId="formGridFirstName">
//                     <Form.Label column sm={4} className="ml-sm-2">First Name</Form.Label>
//                     <Col sm={8}>
//                         <Form.Control
//                             type="text"
//                             name="firstName"
//                             value={values.firstName}
//                             placeholder="Enter First Name"
//                             className={
//                                 {
//                                     "ml-sm-2": true,
//                                     "inputError": errors.firstName
//                                 }
//                             }
//                             onChange = {handleChange}/>
//                             {errors.firstName && <p className="ml-sm-2 error">{errors.firstName}</p>}
//                     </Col>
//                 </Form.Group>
//             </Form.Row>

//             <Form.Row>
//                 <Form.Group as={Row} controlId="formGridLastName">
//                     <Form.Label column sm={4} className="ml-sm-2">Last Name</Form.Label>
//                     <Col sm={8}>
//                         <Form.Control
//                             type="text"
//                             name="lastName"
//                             value={values.lastName}
//                             placeholder="Enter Last Name"
//                             className={
//                                 {
//                                     "ml-sm-2": true,
//                                     "inputError": errors.lastName
//                                 }
//                             }
//                             onChange={handleChange}/>
//                             {errors.lastName && <p className="ml-sm-2 error">{errors.lastName}</p>}
//                     </Col>
//                 </Form.Group>
//             </Form.Row>

//             <Form.Row>
//                 <Form.Group as={Row} controlId="formGridUserName">
//                     <Form.Label column sm={4} className="ml-sm-2">User Name</Form.Label>
//                     <Col sm={8}>
//                         <Form.Control
//                             type="text"
//                             name="userName"
//                             value={values.userName}
//                             placeholder="Enter User Name"
//                             className={
//                                 {
//                                     "ml-sm-2": true,
//                                     "inputError": errors.userName
//                                 }
//                             }
//                             onChange={handleChange}/>
//                             {errors.userName && <p className="ml-sm-2 error">{errors.userName}</p>}
//                     </Col>
//                 </Form.Group>
//             </Form.Row>
//             <Form.Row>
//                  <Form.Group as={Row} controlId="login"> 
//                     <Button
//                         className="ml-sm-4 btn-primary"
//                         display = "inline-block"
//                         vertical-align="top"
//                         size="small"
//                     > Save </Button>    

//                     <Button
//                         variant="outline-success"
//                         className="ml-sm-1"
//                         display = "inline-block"
//                         vertical-align="top"
//                         size="small"
//                     >Cancel</Button>
//                 </Form.Group>
//             </Form.Row>
//         </div>
//     )
// }
// const mapStateToProps = (state) =>{
//     return {
//         user:state.login.user
//     }

// }

// const mapDispatchToProps = dispatch => {
//     return {
//         register: (values) => dispatch(register({...values}))
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

