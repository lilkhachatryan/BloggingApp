import {
    compose,
    createStore,
    applyMiddleware,
  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/index';
import {verifyAuth} from '../pages/Auth/Login/actions';

const store = createStore(reducers,
    compose(applyMiddleware(thunkMiddleware))
);

store.dispatch(verifyAuth());

export default store;