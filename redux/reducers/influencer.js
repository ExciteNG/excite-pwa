import * as actionTypes from "../actions/action-types";
import { updateObject } from "../utility";


const initialState = {
  profile: {},
  "request-form": { productName: "", reasonForProm: "", uniqueQualities: "", productPrice: "", productPrice: [], productServiceCategory: [], contentCreator: "", noOfPosts: "" },
  "form-tab": 0
}

const formUpdates = (state, action) => {
  return {
    ...state["request-form"], ...action.payload
  }
}

const influenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INFLUENCER_FORM_FIELD":
      return formUpdates(state, action)
    case "CHANGE_FORM_TAB":
      return {
        ...state, "form-tab": action.payload
      }
    default:
      return state;
  }
};

export default influenceReducer;