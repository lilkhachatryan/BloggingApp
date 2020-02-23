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

export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const addCommentSuccess = createAction(ADD_COMMENT_SUCCESS);

export const ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR";
const addCommentError = createAction(ADD_COMMENT_ERROR);

export const UPLOAD_FILE_SUCCESS = "UPLOAD_FILE_SUCCESS";
const uploadFileSuccess = createAction(UPLOAD_FILE_SUCCESS);

export const UPLOAD_FILE_ERROR = "UPLOAD_FILE_ERROR";
const uploadFileError = createAction(UPLOAD_FILE_ERROR);



function getPosts(dispatch) {
    dispatch(getPostsAction());
}

export function useActions() {
    const dispatch = useDispatch();

    return {
        handleGetPosts: () => getPosts(dispatch)
    }
}

// export const poster = ({title, about, imgAsFile}) => {
//     if(imgAsFile === '') {
//         console.error(`not an image, the image file is a ${typeof(imgAsFile)}`)
//     }
//     const post = {
//         title: title,
//         content: about
//     };
//     return storage.ref(`/images/${imgAsFile.name}`).put(imgAsFile)
//             .then(async () => {
//                 await getDownloadUrl(imgAsFile, post)
//             })
// };
//
// const getDownloadUrl = (imgAsFile, post) => {
//     return storage.ref('images').child(imgAsFile.name).getDownloadURL()
//             .then(async fireBaseUrl => {
//                 post.image = fireBaseUrl;
//                 await addPost(post)
//             });
// };
//
// const addPost = (post) => {
//     return myFirebase.firestore().collection("posts").doc().set(post);
// };

export const poster = ({title, about,user_id,created_at, imgAsFile}) => {
    if(imgAsFile === '') {
        console.error(`not an image, the image file is a ${typeof(imgAsFile)}`)
    }
    const userRef = myFirebase.firestore()
        .collection('users')
        .doc(user_id);
    console.log("imgAsFile", imgAsFile);
    const post = {
        title: title,
        content: about,
        user_id: userRef,
        created_at: (new Date()).toDateString()
    };
    return function(dispatch, getState, {storage}) {
        return storage.ref(`/images/${imgAsFile.name}`).put(imgAsFile)
            .then(() => {
                return dispatch(getDownloadUrl(imgAsFile, post)).then((fireBaseUrl) => {
                    post.image = fireBaseUrl;
                    return addPost(post);
                });
            })
    }
};

const getDownloadUrl = (imgAsFile, post) => {
    return function(dispatch, getState, {storage}) {
        return storage.ref('images').child(imgAsFile.name).getDownloadURL();
    }
};

const addPost = (post) => {
        return myFirebase.firestore().collection("posts").doc().set(post);
};

