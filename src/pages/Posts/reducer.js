import { GET_POSTS } from './actions';
import _initialState from './_initialState';

export default (state = _initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload.posts
            };
        default:
            return state;
    }
}