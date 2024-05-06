import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
} from "../../redux/actions/productsAction";

const ViewProductAdminHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(9));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, 9));
  };
  const allProducts = useSelector((state) => state.allproducts.allProducts);
  let items = [];
  let pagination = [];
  try {
    if (allProducts) {
      if (allProducts.data) {
        items = allProducts;
      } else {
        items = [];
      }
    }
    if (allProducts) {
      if (allProducts.data) {
        pagination = allProducts.paginationResult.numberOfPages;
      } else {
        items = [];
      }
    }
  } catch (e) {
    console.log(console.log(e));
  }
  return [items, pagination, onPress];
};

export default ViewProductAdminHook;
