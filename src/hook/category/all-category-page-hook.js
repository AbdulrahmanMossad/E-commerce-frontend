import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllCategory, {
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";

const AllCategoryPageHook = () => {
  const dispatch = useDispatch();
  //first load
  useEffect(() => {
    dispatch(getAllCategory(5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // when press pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  return [category, loading, getPage];
};

export default AllCategoryPageHook;
