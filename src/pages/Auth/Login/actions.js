import { createAction } from 'redux-actions';
import { useDispatch } from 'react-redux';
import {myFirebase} from '../../../config/firebase';

export const LOGIN_REQUEST = "LOGIN_REQUEST";
const loginRequestAction = createAction(LOGIN_REQUEST);

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const loginSuccessAction = createAction(LOGIN_SUCCESS);

export const LOGIN_FAILURE = "LOGIN_FAILURE";
const loginFailureAction = createAction(LOGIN_FAILURE);

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
const logoutRequestAction = createAction(LOGOUT_REQUEST);

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const logoutSuccessAction = createAction(LOGOUT_SUCCESS);

export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
const logoutFailureAction = createAction(LOGOUT_FAILURE);


export const VERIFY_REQUEST = "VERIFY_REQUEST";
const verifyRequestAction = createAction(VERIFY_REQUEST);

export const VERIFY_SUCCESS = "VERIFY_SUCCESS";
const verifySuccessAction = createAction(VERIFY_SUCCESS);

function loginRequest(dispatch) {
    dispatch(loginRequestAction());
}

function loginSuccess(dispatch, user) {
    dispatch(loginSuccessAction(user))
}

function loginError(dispatch) {
    dispatch(loginFailureAction())
}

function verifyRequest(dispatch) {
    dispatch(verifyRequestAction())
}

function verifySuccess(dispatch) {
    dispatch(verifySuccessAction())
}

function logoutRequest(dispatch) {
    dispatch(logoutRequestAction());
}

function logoutSuccess(dispatch) {
    dispatch(logoutSuccessAction());
}

function logoutError(dispatch) {
    dispatch(logoutFailureAction())
}

export const loginUser = (email, password) => (dispatch, getSate, { getFireBase, getFirestore })=> {
    loginRequest(dispatch);

    myFirebase.auth()
    .signInWithEmailAndPassword(email,password)
    .then(user => {
        loginSuccess(dispatch, user);
    })
    .catch(error => {
        loginError(dispatch);
    })
}

export const verifyAuth = () => dispatch => {
    verifyRequest(dispatch);

    myFirebase.auth()
      .onAuthStateChanged(user => {
        if (user !== null) {
          loginSuccess(dispatch, user);
        }
        verifySuccess(dispatch);
      });
};

export const logoutUser = () => dispatch => {
    logoutRequest(dispatch);

    myFirebase.auth()
        .signOut()
        .then(user => {
            logoutSuccess(dispatch, user);
        })
        .catch(error => {
            logoutError(dispatch);
        })
}

export function useActions() {
    const dispatch = useDispatch();

    return {
        handleLoginRequest: (email, password) => loginUser(dispatch, email, password),
        handleVerifyAuth: () => verifyAuth(dispatch),
    }
}