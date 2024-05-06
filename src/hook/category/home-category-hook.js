import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllCategory from "../../redux/actions/categoryAction";

const HomeCategoryHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory(5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  return [loading, category];
};

export default HomeCategoryHook;
