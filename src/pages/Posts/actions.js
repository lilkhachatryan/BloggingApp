import { createAction } from 'redux-actions';
import { useDispatch } from 'react-redux';
import {myFirebase} from '../../config/firebase';

export const GET_POSTS = 'GET_POSTS';
const getPostsAction = createAction(GET_POSTS);

export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const addPostSuccessAction = createAction(ADD_POST_SUCCESS);

export const ADD_POST_ERROR = "ADD_POST_ERROR";
const addPostErrorAction = createAction(ADD_POST_ERROR);
// const db=firebase.firestore();

export const ADD_COMMENT_SUCCES = "ADD_COMMENT_SUCCES";
const addCommentSucces = createAction(ADD_COMMENT_SUCCES);

export const ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR";
const addCommentError = createAction(ADD_COMMENT_ERROR);



function getPosts(dispatch) {
    dispatch(getPostsAction());
}

export function useActions() {
    const dispatch = useDispatch();

    return {
        handleGetPosts: () => getPosts(dispatch)
    }
}

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
