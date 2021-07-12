import useAxios from "../../utility/axios-token-manager/init";

export const getAffiliates = () => async (dispatch) => {
  try {
    const getApplicants = await useAxios.get("/app/profile/get-all-affiliates/profile");
    return dispatch({
      type: "GET_AFFILIATES_MARKETERS",
      payload: getApplicants.data.affiliates,
    });
  } catch (error) {
    console.log(error);
    return dispatch({
      type: "GET_AFFILIATES_MARKETERS",
      payload: null,
    });
  }
};

export const getAffiliateProfile = (data) => {
    return {
      type: "GET_AFFILIATES_PROFILE",
      payload: data,
    }
  }
