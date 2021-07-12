import * as actionTypes from "../actions/action-types";
import { updateObject } from "../utility";


const initialState={
    business:[],
    tax:[],
}

const excitePartnerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PARTNERS":
      if(action.payload.partners){
        return {
            ...state,
            tax:action.payload.partners.filter(item=>item.userType==="EX50AFTAX"),
            business:action.payload.partners.filter(item=>item.userType==="EX50AFBIZ"),
        }
    }else{
        return {...state}
    }
      default:
        return state;
    } 
  };
  
  export default excitePartnerReducer;