import { createAction } from "redux-actions";
import { myFirebase } from "../../../config/firebase";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const registerSuccessAction = createAction(REGISTER_SUCCESS);

export const REGISTER_ERROR = "REGISTER_ERROR";
const registerErrorAction = createAction(REGISTER_ERROR);

export const register = ({email, password}) => {
    return (dispatch, getState) => {
        myFirebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                const id = res.user.uid;
                const user = {
                    email: email,
                    firstName: "fAdmin",
                    lastName: "lAdmin",
                    password: password,
                    username: email
                };

                myFirebase.firestore().collection("users").doc(id).set(user).then(() => {
                    dispatch(registerSuccessAction(user));
                });
            })
            .catch(err => dispatch(registerErrorAction(err)))
    }
};