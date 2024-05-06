import { useDispatch, useSelector } from "react-redux";
import avatar from "../../images/avatar.png";
import { notify } from "../useNotification";
import { useEffect, useState } from "react";
import { createBrand } from "../../redux/actions/brandAction";
const AddBrandHook = () => {
  ////////////////////////////////////////////////if we use useselector error happened (because image takes time  )
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.allBrand.brand);
  // console.log(res);
  const onChangeName = (event) => {
    //to prevent default in input text because of reloading because this file is separated of AdminAddCategory componnent
    event.persist();
    setName(event.target.value);
  };
  const onImageChange = (event) => {
    // لازم ناكد ان المستخدم اختار صورة الاول لانه ممكن يدوس ع الزرار و ميخترش اصلا و ممكن يختار اكتر من صورة
    if (event.target.files && event.target.files[0]) {
      //setImg عشان نعرض الصورة لما المستخدم يختارها
      setImg(URL.createObjectURL(event.target.files[0]));
      //دي اللي هبعتها للداتا بيز
      setSelectedFile(event.target.files[0]);
    }
  };
  //save data in database
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (name === "" || selectedFile === null) {
      notify("من فضلك ادخل البيانات", "warn");
    }
    //عشان هنبعت صورة هنستخدم formdata
    const formData = new FormData();
    //نفس ال key اللي في الداتا بيز
    formData.append("name", name);
    formData.append("image", selectedFile);
    // console.log(loading);
    setIsPress(true);
    setLoading(true);
    await dispatch(createBrand(formData));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      //هنا هرجعها تاني عشان الشرط اللي تحت يتحقق و بالتالي التحميل ياخد الثواني بتاعته (true)
      setLoading(true);
      console.log("تم الانتهاء");
      if (isPress === true) {
        setTimeout(() => setIsPress(false), 3000);
        // console.log(res.status);
        if (res.status === 201) {
          notify("تمت الاضافة بنجاح", "success");
        } else {
          notify("هناك مشكلة ", "error");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return [
    img,
    name,
    loading,
    isPress,
    handelSubmit,
    onImageChange,
    onChangeName,
  ];
};

export default AddBrandHook;
