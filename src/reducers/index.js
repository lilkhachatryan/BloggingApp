import {
    combineReducers,
  } from 'redux';
  
import login from '../pages/Auth/Login/reducer';
  
export default combineReducers({
  login,
});