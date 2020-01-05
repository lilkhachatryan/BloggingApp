import {TextField, Button} from '@material-ui/core';
import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "./actions";

function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

    const handleSubmit = () => {
        // const { dispatch } = props;
        // dispatch(loginUser(email, password));

        loginUser(email, password)
    };

    const { classes, loginError, isAuthenticated } = props;
    if (isAuthenticated) {
        return <Redirect to="/" />;
    } else {
        return (
            <>
                <div className="login-container">
                    <TextField id="standard-basic" 
                        label="Email"
                        className="field"
                        onChange={handleEmailChange}/>
                    <TextField id="standard-basic"
                        label="Password"
                        className="field"
                        onChange={handlePasswordChange}/>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}>
                        Sign In
                    </Button>
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
}

const actionCreators = {
    loginUser,
}  

export default connect(mapStateToProps, actionCreators)(Login);