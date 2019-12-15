import React from 'react';
import {Logout} from "./Auth/Logout";
import {Button} from "@material-ui/core";
import {logoutUser} from "./Auth/Login/actions";
import connect from "react-redux/lib/connect/connect";

class Profile extends React.Component {
    handleClick = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
render() {
    return (
        <>
            <div>

                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}>
                    Logout
                </Button>
                <p>You Logged in</p>

            </div>
        </>
    )
}
}
function mapStateToProps(state) {
    console.log('stte', state)
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
}
export default connect(mapStateToProps)(Profile) ;