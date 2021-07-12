import * as actionTypes from "../actions/action-types";
import { updateObject } from "../utility";


const initialState={
    affiliate:[],
    profile:{},
}

const springboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_AFFILIATES_MARKETERS":
      if(action.payload){
        return {
            ...state,
            affiliate:[...action.payload],
        }
    }else{
        return {...state}
    }
      case "GET_AFFILIATES_PROFILE":
      if(action.payload){
        return {
            ...state,
            profile:{...action.payload},
        }
    }else{
        return {...state}
    }
      default:
        return state;
    } 
  };
  
  export default springboardReducer;