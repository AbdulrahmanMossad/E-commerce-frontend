import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllCategory from "../../redux/actions/categoryAction";
import { notify } from "../useNotification";
import { createSubCategory } from "../../redux/actions/subCategoryAction";

const AddSubcategoryHook = () => {
  const [id, setID] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  //first load
  useEffect(() => {
    dispatch(getAllCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  const category = useSelector((state) => state.allCategory.category);
  const subcategory = useSelector((state) => state.subCategory.subcategory);
  // console.log(subcategory);
  const handleChange = (event) => {
    setID(event.target.value);
  };
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warn");
      return;
    }
    if (id === "0") {
      notify("من فضلك اختر التصنيف الرئيسي", "warn");
    }
    if (name === "") {
      notify("من فضلك ادخل الاسم الفرعي", "warn");
    }
    setLoading(true);
    await dispatch(createSubCategory({ name, category: id }));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setName("");
      setID("0");
      console.log(subcategory.data);
      if (subcategory) {
        if (subcategory.status === 201) {
          notify("تمت الاضافة بنجاح", "success");
        } else if (subcategory === "Error fail") {
          notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn");
        } else {
          console.log(typeof subcategory.errors);
        }
      }
    }
    setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return [name, handleChange, category, handleSubmit, onChangeName];
};

export default AddSubcategoryHook;
