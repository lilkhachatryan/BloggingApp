import React from "react";
import { Button } from 'react-bootstrap';
import { logoutUser } from "../Login/actions";
import { connect } from "react-redux";

export function Logout(props) {

    const handleClick = () => {
        const { logoutUser } = props;
        logoutUser();
    };


    // const { classes, logoutError, isAuthenticated } = props;
    // if (isAuthenticated) {
    //     return <Redirect to="/" />;
    // } else {
        return (
            <div className="logout-container">
                <Button
                    variant="outline-primary"
                    className="ml-sm-2"
                    onClick={handleClick}>Logout</Button>
            </div>
        )
    // }
}

const  mapStateToProps = (state) => {
    return {
        isLoggingIn: state.login.isLoggingIn,
        isAuthenticated: state.login.isAuthenticated
    };
};

const actionCreators = {
    logoutUser,
};

export default connect(mapStateToProps, actionCreators)(Logout);