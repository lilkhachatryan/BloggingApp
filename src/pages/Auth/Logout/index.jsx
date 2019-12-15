import React, {useState} from "react";
import {Button} from '@material-ui/core';
import {loginUser, logoutUser} from "../Login/actions";
import { Redirect } from "react-router-dom";

//import {connect} from "react-redux";

export function Logout(props) {

    const handleClick = () => {
        const { dispatch } = props;
        dispatch(logoutUser());
    };


    const { classes, logoutError, isAuthenticated } = props;
    if (isAuthenticated) {
        return <Redirect to="/" />;
    } else {
        return (
            <div className="logout-container">
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleClick}>
                    Logout
                </Button>
            </div>
        )
    }
}

const  mapStateToProps = (state) => {
    console.log('state',state)
    return {
        isLoggingIn: state.login.isLoggingIn,
        loginError: state.login.loginError,
        isAuthenticated: state.login.isAuthenticated
    };
}

//export default connect(mapStateToProps)(Logout);