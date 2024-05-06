import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllBrand, { getAllBrandPage } from "../../redux/actions/brandAction";

const AllBrandPageHook = () => {
  const dispatch = useDispatch();
  const brand = useSelector((state) => state.allBrand.brand);
  // console.log(brand.data);
  const loading = useSelector((state) => state.allBrand.loading);
  //first load
  useEffect(() => {
    dispatch(getAllBrand(5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //to get page count

  // when press pagination
  const getPage = (page) => {
    dispatch(getAllBrandPage(page));
  };

  return [brand, loading, getPage];
};

export default AllBrandPageHook;
