import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProducts,
  getProductLike,
} from "../../redux/actions/productsAction";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandAction";
const ViewProductDetailsHook = (id) => {
  // console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProducts(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const allProducts = useSelector((state) => state.allproducts.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const productLike = useSelector((state) => state.allproducts.productLike);
  let item = [];

  if (allProducts?.data) {
    item = allProducts?.data;
  } else {
    item = [];
  }
  useEffect(() => {
    if (item.category) dispatch(getOneCategory(item.category));
    if (item.brand) dispatch(getOneBrand(item.brand));
    if (item.category) dispatch(getProductLike(item.category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);
  let images = [];
  if (item.images) {
    images = item.images.map((img) => {
      return {
        original: img,
        thumbnail: img,
      };
    });
  } else {
    images = [{ original: "", thumbnail: "" }];
  }

  //to show category item
  let cat = [];
  if (oneCategory?.data) cat = oneCategory?.data;
  else cat = [];

  //to show brand item
  let brand = [];
  if (oneBrand?.data) brand = oneBrand?.data;
  else brand = [];
  let prod = [];
  if (productLike) prod = productLike?.data;
  else prod = [];
  return [item, images, cat, brand, prod];
};

export default ViewProductDetailsHook;
