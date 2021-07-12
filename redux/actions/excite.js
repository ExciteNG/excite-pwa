import useAxios from "./../../utility/axios-token-manager/init";

export const getPartners = () => async (dispatch) => {
  try {
    const getApplicants = await useAxios.get("/excite/partners/all/partners");
    return dispatch({
      type: "GET_PARTNERS",
      payload: getApplicants.data,
    });
  } catch (error) {
    console.log(error);
    return dispatch({
      type: "GET_PARTNERS",
      payload: null,
    });
  }
};
