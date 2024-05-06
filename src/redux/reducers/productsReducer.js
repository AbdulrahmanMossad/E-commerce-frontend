import {
  GET_ALL_PRODUCTS,
  GET_ERROR,
  CREATE_PRODUCTS,
  GET_PRODUCT_DETALIS,
  GET_PRODUCT_LIKE,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  GET_ALL_PRODUCTS_SEARCH,
  GET_ALL_PRODUCTS_CATEGORY,
  GET_ALL_PRODUCTS_BRAND,
} from "../type";

const initial = {
  product: [],
  allProducts: [],
  oneProduct: [],
  productLike: [],
  deleteProducts: [],
  updateProducts: [],
  allProductsSearch:[],
  allProductCat: [],
  allProductBrand: [],
  loading: true,
};
const productsReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS_SEARCH:
      return {
        ...state,
        allProductsSearch: action.payload,
        loading: false,
      };
    case GET_PRODUCT_DETALIS:
      return {
        ...state,
        oneProduct: action.payload,
        loading: false,
      };
    case CREATE_PRODUCTS:
      return {
        product: action.payload,
        loading: false,
      };
    case GET_PRODUCT_LIKE:
      return {
        ...state,
        productLike: action.payload,
        loading: false,
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
        deleteProducts: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        updateProducts: action.payload,
        loading: false,
      };
      case GET_ALL_PRODUCTS_CATEGORY:
        return {
            loading: true,
            allProductCat: action.payload,
        }
    case GET_ALL_PRODUCTS_BRAND:
        return {
            loading: true,
            allProductBrand: action.payload,
        }
    case GET_ERROR:
      return {
        loading: true,
        product: action.payload,
      };
    default:
      return state;
  }
};
export default productsReducer;
