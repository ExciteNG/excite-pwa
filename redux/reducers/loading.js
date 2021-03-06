import * as actionTypes from "../actions/action-types";
import { updateObject } from "../utility";


const initialState={
    isLoading:false,
}
const startLoading = (state) => {
    return {
      ...state,isLoading:true
    }
  };
const stopLoading = (state) => {
    return {
      ...state,isLoading:false
    }
  };


const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "START":
        return startLoading(state);
      case "STOP":
        return stopLoading(state);
      default:
        return state;
    } 
  };
  
  export default loadingReducer;