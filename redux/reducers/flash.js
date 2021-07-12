import * as actionTypes from "../actions/action-types";
import { updateObject } from "../utility";


const initialState={
    flash:false,
    title:null,
    message:null,
    type:null,
    timeOut:null
}
const flashStart = (state,data) => {
    return {
      ...state,...data
    }
  };
const flashReset = (state) => {
    return {
      ...state,...initialState
    }
  };


const flashReducer = (state = initialState, action) => {
    switch (action.type) {
      case "START":
        return flashStart(state,action.payload);
      case "STOP":
        return flashReset();
      default:
        return state;
    } 
  };
  
  export default flashReducer;