import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import {myFirebase} from "../config/firebase";

function Profile (props) {
    const { user } = props;
    // const [user, setUser] = useState({});
    //
    // const getUser = () => {
    //     const ref = myFirebase.firestore().collection('users').doc(user_id);
    //
    //     ref.get()
    //         .then((doc) => {
    //             if (doc.exists) {
    //                 setUser(doc.data());
    //             }
    //         })
    //         .catch((err) => console.log("err -->", err))
    // };
    //
    // useEffect(() => {
    //     getUser();
    // }, []);

    return (
        <>
            <p>Profile page</p>
            <p>{user.firstName} {user.lastName}</p>
        </>
    )
};
function mapStateToProps(state) {
    return {
        isLoggingOut: state.login.isLoggingOut,
        logoutError: state.login.logoutError,
        user: state.login.user
    };
}

const actionCreators = {
};

export default connect(mapStateToProps, actionCreators)(Profile);