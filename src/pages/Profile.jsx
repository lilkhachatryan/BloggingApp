import React from 'react';
import {Logout} from "./Auth/Logout";
import {Button} from "@material-ui/core";
import {logoutUser} from "./Auth/Login/actions";
import {connect} from "react-redux";

class Profile extends React.Component {
    handleClick = () => {
        this.props.logoutUser();
    };
    render() {
        return (
            <>
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}>
                    Logout
                </Button>
                <p>You Logged in</p>
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
    logoutUser,
};

export default connect(mapStateToProps, actionCreators)(Profile) ;