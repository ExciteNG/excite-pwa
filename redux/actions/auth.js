
import * as actionTypes from "./action-types";
import {host} from "./../../hostEndpoint"

import useAxios,{setToken} from "./../../utility/axios-token-manager/init"


export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = profile => {
  return { 
    type: actionTypes.AUTH_SUCCESS,
    payload:profile
  };
};
 
export const authFail = error => {

  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
  
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    
    useAxios
      .post(`/auth/login/`, {
        username: username,
        password: password
      })
      .then(res => {
        // console.log(res.data)
        const user = {
          token: res.data.token,
          username : res.data.username,
          email:res.data.email,
          userId: null,
          is_buyer: false,
          is_seller: true,
          expirationDate: new Date(new Date().getTime() + 36000 * 10000)
        };
        sessionStorage.setItem("user", JSON.stringify(user));
        //set tokken to local storage
        setToken(res.data.token)
        //set autorization either for future axios requuest
        useAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        dispatch(authSuccess(user));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const authSignup = (
  username,
  email,
  password1,
  password2,
  is_buyer
) => {
  return dispatch => {
    dispatch(authStart());
    const user = {
      username,
      email,
      password1,
      password2,
      is_buyer,
      is_seller: !is_buyer
    };
    useAxios
      .post(`/auth/register/`, user)
      .then(res => {
        const user = {
          token: res.data.key,
          username,
          userId: res.data.user,
          is_buyer,
          is_seller: !is_buyer,
          expirationDate: new Date(new Date().getTime() + 3600 * 1000)
        };
        if (typeof window !== 'undefined' ){
          sessionStorage.setItem("user", JSON.stringify(user));
       }
    
      //  request login 
         authLogin(username ,password1)

        dispatch(authSuccess(user));
        //dispatch(fetchCart())
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};






