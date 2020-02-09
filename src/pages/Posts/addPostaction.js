import { createAction } from "redux-actions";
import { myFirebase } from "../../config/firebase";


export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const addPostSuccessAction = createAction(ADD_POST_SUCCESS);

export const ADD_POST_ERROR = "ADD_POST_ERROR";
const addPostErrorAction = createAction(ADD_POST_ERROR);
// const db=firebase.firestore();

export const poster = ({title, about}) => {
    return (dispatch, getState) => {
            const post = {
                title: title,
                content: about,
            }
            myFirebase.firestore().collection("posts").doc().set(post)
            .then((res) => {                    
                dispatch(addPostSuccessAction(post));
                //console.log("post", res);
            })
            .catch(err => dispatch(addPostErrorAction(post))
            )
    }
                
}