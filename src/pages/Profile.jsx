import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import {myFirebase} from "../config/firebase";
import EditProfile from "../pages/EditProfile";

function Profile (props) {
    const { user,history } = props;


    const handleOnClik = () =>{

        history.push("/editprofile");

        // const inputFirstName = document.createElement('textarea');
        // inputFirstName.innerHTML = user.firstName;
        // document.body.append(inputFirstName);

        // const inputLastName = document.createElement('textarea');
        // inputLastName.innerHTML = user.lastName;
        // document.body.append(inputLastName);
        // console.log("eghav");

    } 

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
            <p>{user.firstName} {user.lastName}</p>
            <button id = "profEdit" onClick = {handleOnClik}>Edit Profile</button>
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