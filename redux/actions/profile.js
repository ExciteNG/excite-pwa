import useAxios from "../../utility/axios-token-manager/init";
import { loadStart, loadStop } from "./loading";
import { authSuccess } from "./auth";
import Cookies from 'cookies'



export const reloadProfile = () => async (dispatch) => {
  // console.log('reloading')
  try {
    dispatch(loadStart());
    const response = await useAxios.get("/app/profile/get/profile/email");
    if (!response.data) {
      return {
        redirect: {
          destination: "/services/login",
          permanent: false,
        },
      };
    } else {
      dispatch(loadStart())
      await dispatch(authSuccess(response.data));
      dispatch(loadStop())
    }
  } catch (error) {
    console.log(error);
    // return dispatch({
    //   type: "GET_PRODUCTS",
    //   payload: null,
    // });
  }
};
