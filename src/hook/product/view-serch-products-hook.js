import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch } from "../../redux/actions/productsAction";

const ViewSerchProductsHook = () => {
  let limit = 4;
  const dispatch = useDispatch();
  const getProduct = () => {
    getStorage();
    sortData();
    dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`
      )
    );
  };
  //first call when realoading
  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const allProducts = useSelector(
    (state) => state.allproducts.allProductsSearch
  );
  let items = [];
  let pagination = [];
  let results = 0;
  try {
    if (allProducts.data) {
      items = allProducts.data;
    } else {
      items = [];
    }
  } catch (e) {}

  try {
    if (allProducts.paginationResult)
      pagination = allProducts.paginationResult.numberOfPages;
    else pagination = [];
  } catch {}

  try {
    if (allProducts.results) results = allProducts.results;
    else results = [];
  } catch {}
  //for pagination (click pagination)
  const onPress = async (page) => {
    getStorage();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`
      )
    );
  };
  let word = "";
  let queryCat = "";
  let queryBrand = "";
  let priceFrom = 0;
  let priceTo = 0;
  let priceToString = "";
  let priceFromString = "";
  const getStorage = () => {
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
    }
    if (localStorage.getItem("catChecked") != null) {
      queryCat = localStorage.getItem("catChecked");
    }
    if (localStorage.getItem("brandChecked") != null) {
      queryBrand = localStorage.getItem("brandChecked");
    }
    if (localStorage.getItem("priceFrom") != null) {
      priceFrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo") != null) {
      priceTo = localStorage.getItem("priceTo");
    }

    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gt]=${priceFrom}`;
    }
    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
  };
  let sortType = "",
    sort;
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    if (sortType === "السعر من الاقل للاعلي") sort = "+price";
    else if (sortType === "السعر من الاعلي للاقل") sort = "-price";
    else if (sortType === "") sort = "";
    else if (sortType === "الاكثر مبيعا") sort = "-sold";
    else if (sortType === "الاعلي تقييما") sort = "-quantity";
  };
  return [items, pagination, onPress, getProduct, results];
};

export default ViewSerchProductsHook;
