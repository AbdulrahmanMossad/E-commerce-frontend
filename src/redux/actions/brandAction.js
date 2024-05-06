import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND } from "../type";
import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
const getAllBrand = (limit) => {
  return async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/brands?limit=${limit}`);
      dispatch({
        type: GET_ALL_BRAND,
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
//get one Brand
export const getOneBrand = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands/${id}`);

    dispatch({
      type: GET_ONE_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
export const getAllBrandPage = (page) => {
  return async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/brands?limit=5&page=${page}`);
      dispatch({
        type: GET_ALL_BRAND,
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

export const createBrand = (formData) => {
  return async (dispatch) => {
    try {
      const response = await useInsertDataWithImage("/api/v1/brands", formData);
      console.log(response);
      dispatch({
        type: CREATE_BRAND,
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

export default getAllBrand;
