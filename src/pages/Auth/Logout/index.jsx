import React from "react";
import { logoutUser } from "../Login/actions";
import { connect } from "react-redux";

export function Logout(props) {

    const handleClick = () => {
        const { logoutUser } = props;
        logoutUser();
    };

    return (
        <div onClick={handleClick}>Logout</div>
    )
}

const actionCreators = {
    logoutUser,
};

export default connect(null, actionCreators)(Logout);