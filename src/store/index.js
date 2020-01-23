import {
    compose,
    createStore,
    applyMiddleware,
  } from 'redux';
  import thunkMiddleware from 'redux-thunk';
  import { reduxFirestore, getFirestore } from 'redux-firestore';
  import { reactReduxFirebase , getFirebase } from 'react-redux-firebase';
  import firbase from '../config/firebase';
  
  import reducers from '../reducers/index';

  import {verifyAuth} from '../pages/Auth/Login/actions';

  export default function configureStore() {
    const store = createStore(
      reducers,
      compose(
        applyMiddleware(thunkMiddleware.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firbase),
        reactReduxFirebase(firbase),
      )
    );
    store.dispatch(verifyAuth());
    return store;
  }
// const store = createStore(
//     reducers,
//     compose(
//       applyMiddleware(thunkMiddleware.withExtraArgument({ getFirebase, getFirestore })),
//       reduxFirestore(firbase),
//       reactReduxFirebase(firbase),
//     )
//   );
// store.dispatch(verifyAuth());


// export default store;