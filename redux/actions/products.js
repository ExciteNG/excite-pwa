import useAxios from "./../../utility/axios-token-manager/init";
import {loadStart,loadStop} from './../actions/loading'

export const getProducts = (category) => async (dispatch) => {
  try {
    dispatch(loadStart())
    const endpoint = "/marketplace/products/category/all";
    const product = await useAxios.post(endpoint, { category: category })
    dispatch(loadStop())
    return dispatch({
      type: "GET_PRODUCTS",
      payload: {data:product.data.category,category:category},
    });
  } catch (error) {
    console.log(error);
    return dispatch({
      type: "GET_PRODUCTS",
      payload: null,
    });
  }
};

export const getCategory = (data,category)=>{
  return{
    type:"GET_PRODUCT_BY_CATEGORY",
    payload:{data:[...data],category:category}
  }
}
export const getLanding = (data)=>{
  // console.log('hello', data)
  return{
    type:"LANDING-PAGE",
    payload:{...data}
  }
}

export const searchResult = (data) =>(dispatch)=>{
  return dispatch({
    type:"SEARCH-RESULT",
    payload:data
  })
}
