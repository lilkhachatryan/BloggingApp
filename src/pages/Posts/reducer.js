import { GET_POSTS } from './actions';
import {ADD_POST_SUCCESS, ADD_POST_ERROR } from './addPostaction';
import _initialState from './_initialState';

export default (state = _initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload.posts
            };
        case ADD_POST_SUCCESS: 
            return {                
                posts: payload.posts
            }
        case ADD_POST_ERROR: 
            return {
                ...state,
            }
        default:
            return state;
    }
}