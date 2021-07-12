import * as actionTypes from "../actions/action-types";
import { updateObject } from "../utility";
import {getDecodedToken} from './../../utility/axios-token-manager/token'
import Cookies from 'cookie-cutter'

const initialState = {
  token: typeof window !=="undefined" ? sessionStorage?.getItem('user'):"",
  user: typeof window !== "undefined" ? getDecodedToken():{},
  error: null,
  loading: false,
  email:null,
  profile:{},
  reload:true
};


const authSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    profile:action.payload,
    reload:false,
  });
};
const authLogin = (state,action)=>{
  return updateObject(state,{
    token:action.payload
  })
}

const authLogout = (state) => {
  if(typeof window !== "undefined"){
    sessionStorage.setItem('user',null);
  // remove cookies
    Cookies.set('jwt','',{ expires: new Date(0)})
  }
  return updateObject(state, {
    token: null,
    user:{},
    error: null,
    loading: false,
    email:null,
    profile:{}
  });

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state);
    case actionTypes.AUTH_LOGIN:
      return authLogin(state,action);
    default:
      return state;
  }
};

export default authReducer;