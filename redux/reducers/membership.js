import * as actionTypes from "../actions/action-types";
import { updateObject } from "../utility";

const initialState = {
  mode:null,
  error: null,
  loading: true
};

const getMembershipStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };

const getMembershipSuccess = (state, action) => {
    return updateObject(state, {
        mode:action.data.mode
    });
  };

  const getMembershipFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: true
    });
  };


  const membershipReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.MEMBERSHIP_START:
        return getMembershipStart(state, action);
      case actionTypes.MEMBERSHIP_SUCCESS:
        return getMembershipSuccess(state, action);
      case actionTypes.MEMBERSHIP_FAIL:
        return getMembershipFail(state, action);
      default:
        return state;
    } 
  };
  
  export default membershipReducer;