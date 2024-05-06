import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../hook/useNotification";
import getAllCategory from "../../redux/actions/categoryAction";
import getAllBrand from "../../redux/actions/brandAction";
import getOneCategory from "../../redux/actions/subCategoryAction";
import { createProduct } from "../../redux/actions/productsAction";
const AdminAddProductsHook = () => {
  const onSelect = (selectedList) => {
    console.log(seletedSubID);
    setSeletedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    console.log(seletedSubID);
    setSeletedSubID(selectedList);
  };
  const [images, setImages] = useState({});
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAftr, setPriceAftr] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [CatID, setCatID] = useState("0");
  const [BrandID, SetBrandID] = useState("");
  // const [subCatID, setSubCatID] = useState([]);
  const [seletedSubID, setSeletedSubID] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);
  const [options, setOptions] = useState([]);
  ///////////////////////////
  const dispatch = useDispatch();
  //get last catgeory state from redux
  const category = useSelector((state) => state.allCategory.category);
  //get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);
  const subCat = useSelector((state) => state.subCategory.subcategory);

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrand());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  ///////////////////////////////
  //to change name state
  const onChangeProdName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };
  //to change name state
  const onChangeDesName = (event) => {
    event.persist();
    setProdDescription(event.target.value);
  };
  //to change name state
  const onChangePriceBefor = (event) => {
    event.persist();
    setPriceBefore(event.target.value);
  };
  //to change name state
  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAftr(event.target.value);
  }; //to change name state
  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };
  const onChangeColor = (event) => {
    event.persist();
    setShowColor(!showColor);
  };
  const onSelectCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(getOneCategory(e.target.value));
    }
    setCatID(e.target.value);
  };
  useEffect(() => {
    if (CatID !== 0) {
      if (subCat.data) {
        setOptions(subCat.data);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CatID]);
  const onSelectBrand = (e) => {
    SetBrandID(e.target.value);
  };
  // save pick color
  const handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
    console.log(showColor);
  };
  const removeColor = (index) => {
    // colors.splice(index, 1);
    // setColors(colors);
    const newColors = colors.filter((e) => e !== index);
    console.log(newColors);
    setColors(newColors);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      CatID === 0 ||
      prodName === "" ||
      prodDescription === "" ||
      images.length <= 0 ||
      priceBefore <= 0
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    //to convert base 64 to file
    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, { type: mime });
    }
    //convert base 64 image to file (because of library (MultiImageInput)we used here in this component  not like in brand component)
    const imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    // console.log(images[0]);
    // console.log(imgCover);
    //convert array of base 64 image to file
    ///we make array becuse images is object and i can not loop in it
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );
    // console.log(images);
    // console.log(Array.from(Array(Object.keys(images).length).keys()));
    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    //cover pic of prouduct (image 0 in array of pictures)
    formData.append("imageCover", imgCover);
    formData.append("category", CatID);
    formData.append("brand", BrandID);
    itemImages.map((item) => formData.append("images", item));

    colors.map((color) => formData.append("availableColors", color));
    seletedSubID.map((item) => formData.append("subcategory", item._id));
    setLoading(true);
    await dispatch(createProduct(formData));
    setLoading(false);
  };
  const product = useSelector((state) => state.allproducts.product);
  useEffect(() => {
    if (loading === false) {
      // setCatID(0)
      setColors([]);
      setImages({});
      setProdName("");
      setProdDescription("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAftr("السعر بعد الخصم");
      setQty("الكمية المتاحة");
      SetBrandID("");
      setSeletedSubID([]);
      setTimeout(() => setLoading(true), 1500);

      if (product) {
        console.log("saaaaaaaaaaaaaaaaaaaaaaa");
        console.log(product);
        if (product.status === 201) {
          notify("تم الاضافة بنجاح", "success");
        } else {
          notify("هناك مشكله", "error");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return [
    onChangeDesName,
    onChangeQty,
    onChangeColor,
    onChangePriceAfter,
    onChangePriceBefor,
    onChangeProdName,
    showColor,
    category,
    brand,
    priceAftr,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handleChangeComplete,
    removeColor,
    onSelectCategory,
    handleSubmit,
    onSelectBrand,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
    BrandID,
  ];
};
export default AdminAddProductsHook;
