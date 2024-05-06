import {
  CREATE_CATEGORY,
  GET_ALL_CATEGORY,
  GET_ERROR,
  GET_ONE_CATEGORY,
} from "../type";
import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
const getAllCategory = (limit) => {
  return async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/categories?limit=${limit}`);
      dispatch({
        type: GET_ALL_CATEGORY,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
};

//get one category with
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}`);

    dispatch({
      type: GET_ONE_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
export const getAllCategoryPage = (page) => {
  return async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/categories?limit=5&page=${page}`
      );
      dispatch({
        type: GET_ALL_CATEGORY,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
};

export const createCategory = (formData) => {
  return async (dispatch) => {
    try {
      const response = await useInsertDataWithImage(
        "/api/v1/categories",
        formData
      );
      console.log(response);
      dispatch({
        type: CREATE_CATEGORY,
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

export default getAllCategory;
