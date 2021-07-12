import * as actionTypes from "../actions/action-types";
import { updateObject } from "../utility";


const initialState={
    user:null,
    amount:null,
}
const getMembershipFail = (state, action) => {
    return {
      ...state,user:action.user,amount:5000
    }
  };


const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Payment":
        return getMembershipFail(state, action.payload);
      default:
        return state;
    } 
  };
  
  export default paymentReducer;