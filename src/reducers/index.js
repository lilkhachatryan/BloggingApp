import {
    combineReducers,
  } from 'redux';
  
import login from '../pages/Auth/Login/reducer';
import post from '../pages/Posts/reducer';
  
export default combineReducers({
  login,
  //logout,
  post
});