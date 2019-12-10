import {
    compose,
    createStore,
    applyMiddleware,
  } from 'redux';
  import thunkMiddleware from 'redux-thunk';
  
  import reducers from '../reducers/index';

  import {verifyAuth} from '../pages/Auth/Login/actions'
  // console.log("useActions", useActions())
  
  // If you have a Redux extesion for Chrome.
  // const enhacers = (window.__REDUX_DEVTOOLS_EXTENSION__
  //   ? window.__REDUX_DEVTOOLS_EXTENSION__()
  //   : f => f
  // );
  
  // export default createStore(
  //   applyMiddleware(thunkMiddleware),
  //   reducers,
  // );

  export default function configureStore() {
    const store = createStore(
      reducers,
      applyMiddleware(thunkMiddleware)
    );
    store.dispatch(verifyAuth());
    return store;
  }