import { createAction } from 'redux-actions';
import { useDispatch } from 'react-redux';
// import {myFirebase} from '../../config/firebase';

export const GET_POSTS = 'GET_POSTS';
const getPostsAction = createAction(GET_POSTS);

function getPosts(dispatch) {
    dispatch(getPostsAction());
}

export function useActions() {
    const dispatch = useDispatch();

    return {
        handleGetPosts: () => getPosts(dispatch)
    }
}