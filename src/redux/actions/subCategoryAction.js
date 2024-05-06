import { GET_ERROR, CREATE_SUB_CATEGORY, GET_SUB_CATEGORY } from "../type";
import { useGetData } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
const getOneSubCategory = (id) => {
  return async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/categories/${id}/subcategories`
      );
      // console.log(response);
      dispatch({
        type: GET_SUB_CATEGORY,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
};
export const createSubCategory = (data) => {
  return async (dispatch) => {
    try {
      const response = await useInsertData("/api/v1/subcategories", data);
      // console.log(response);
      dispatch({
        type: CREATE_SUB_CATEGORY,
        payload: response,
        loading: true,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: GET_ERROR,
        payload: e.response.data,
      });
    }
  };
};

export default getOneSubCategory;
