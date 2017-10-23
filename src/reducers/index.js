// ./react-redux-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';

export default combineReducers({
  appState:appReducer,
  productState:productReducer,
  userState:userReducer,
  routing
})