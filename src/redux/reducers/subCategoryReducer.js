import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../type";

const initial = {
  subcategory: [],
  loading: true,
};
const subCategoryReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_SUB_CATEGORY:
      return {
        ...state,
        subcategory: action.payload,
        loading: false,
      };
    case CREATE_SUB_CATEGORY:
      return {
        subcategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        subcategory: action.payload,
      };
    default:
      return state;
  }
};
export default subCategoryReducer;
