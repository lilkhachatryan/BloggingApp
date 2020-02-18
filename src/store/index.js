import {
    compose,
    createStore,
    applyMiddleware,
  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { myFirebase, storage } from "../config/firebase";
import reducers from '../reducers/index';
import {verifyAuth} from '../pages/Auth/Login/actions';

const store = createStore(reducers,
    compose(applyMiddleware(thunkMiddleware.withExtraArgument({myFirebase, storage})))
);

store.dispatch(verifyAuth());

export default store;