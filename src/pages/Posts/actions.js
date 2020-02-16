import { createAction } from 'redux-actions';
import { useDispatch } from 'react-redux';
import {myFirebase} from '../../config/firebase';

import { storage } from "../../../src/config/firebase";

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

export const poster = ({title, about, imgAsFile}) => {
    return (dispatch, getState) => {
        const image = '';
            uploadFile(imgAsFile).then(res => {
                console.log("upload res from then", res);
                image = res;
            });
            // console.log("upload res image", image);
            const post = {
                title: title,
                content: about,
                image:  image
            };
            dispatch(addPost(post));            
    }
                
}
const addPost = (post) => {
    return (dispatch) => {
        myFirebase.firestore().collection("posts").doc().set(post)
            .then((res) => {                    
                dispatch(addPostSuccessAction(post));
                console.log("post", res);
            })
            .catch(err => dispatch(addPostErrorAction(post))
            )
        }
};

export const uploadFile = (imgAsFile) => {
    if(imgAsFile === '') {
        console.error(`not an image, the image file is a ${typeof(imgAsFile)}`)
    }
    const uploadTask = storage.ref(`/images/${imgAsFile.name}`).put(imgAsFile);
    uploadTask.on('state_changed', 
    (snapShot) => {
        console.log(snapShot)
    }, (err) => {
        console.log(err)
    }, () => {
        return storage.ref('images').child(imgAsFile.name).getDownloadURL()
        // .then(fireBaseUrl => {
        //     console.log("file res", fireBaseUrl);
        //     // setImgAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
        //     return fireBaseUrl;
        // })
    })
};

