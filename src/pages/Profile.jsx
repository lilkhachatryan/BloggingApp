import React from 'react';
import {Logout} from "./Auth/Logout";
import {Button} from "@material-ui/core";
import {logoutUser} from "./Auth/Login/actions";
import {connect} from "react-redux";

class Profile extends React.Component {
    render() {
        return (
            <>
                <p>You Logged in</p>
                <p>Profile page</p>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        isLoggingOut: state.login.isLoggingOut,
        logoutError: state.login.logoutError
    };
}

const actionCreators = {
};

export default connect(mapStateToProps, actionCreators)(Profile) ;