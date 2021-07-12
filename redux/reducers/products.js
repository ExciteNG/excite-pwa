import * as actionTypes from "../actions/action-types";
import { updateObject } from "../utility";


const initialState = {
  "electronics": [],
  "fashion": [],
  "vehicle": [],
  "health": [],
  "services": [],
  "Property": [],
  "Kids": [],
  "home-kitchen-appliance": [],
  "phones-tablets": [],
  search: [],
  landing: {deals:[],products:[],banner:[]}
}

const getProducts = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      if (action.payload) {
        return {
          ...state,
          [action.payload.category]: action.payload.data,
        }
      } else {
        return { ...state }
      }
    case "GET_PRODUCT_BY_CATEGORY":
      return {
        ...state,[action.payload.category]: action.payload.data,
      }
    case "SEARCH-RESULT":
      return {
        ...state, search: [...action.payload]
      }
    case "LANDING-PAGE":
      return {
        ...state, landing: { ...action.payload }
      }
    default:
      return state;
  }
};



export default getProducts;