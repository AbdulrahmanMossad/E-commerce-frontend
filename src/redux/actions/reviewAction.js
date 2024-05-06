import useDeleteData from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { useInsUpdateData } from "../../hooks/useUpdateData";
import {
  ALL_REVIEW_PRODUCT,
  CREATE_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW,
} from "../type";

export const createReview = (prodID, body) => async (dispatch) => {
  try {
    const response = await useInsertData(
      `/api/v1/products/${prodID}/reviews`,
      body
    );

    dispatch({
      type: CREATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_REVIEW,
      payload: e.response,
    });
  }
};
export const allReviewProduct = (prodID, page, limit) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`
    );

    dispatch({
      type: ALL_REVIEW_PRODUCT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ALL_REVIEW_PRODUCT,
      payload: e.response,
    });
  }
};

//delete review to one product
export const deleteReviewOnProduct = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/reviews/${id}`);

    dispatch({
      type: DELETE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_REVIEW,
      payload: e.response,
    });
  }
};

//update review to one product
export const updateReviewOnProduct = (id, body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/reviews/${id}`, body);

    dispatch({
      type: UPDATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_REVIEW,
      payload: e.response,
    });
  }
};
