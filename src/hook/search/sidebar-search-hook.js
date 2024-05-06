import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllCategory from "../../redux/actions/categoryAction";
import getAllBrand from "../../redux/actions/brandAction";
import ViewSerchProductsHook from "../product/view-serch-products-hook";

const SidebarSearchHook = () => {
  const [, , , getProduct] = ViewSerchProductsHook();
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const allCat = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrand.brand);
  let category = [];
  if (allCat.data) {
    category = allCat.data;
  }
  let brand = [];
  if (allBrand.data) {
    brand = allBrand.data;
  }
  //for checked categories
  const [catChecked, setCatChecked] = useState([]);
  const [catCheckedValue, setCatCheckedValue] = useState(
    localStorage.getItem("catCheckedValue")
      ? localStorage.getItem("catCheckedValue").split(",")
      : []
  );
  const [brandCheckedValue, setBrandCheckedValue] = useState(
    localStorage.getItem("brandCheckedValue")
      ? localStorage.getItem("brandCheckedValue").split(",")
      : []
  );
  // console.log(typeof localStorage.getItem("catChecked"));
  let x = 0;
  const clickCategory = (e) => {
    let value = e.target.value;

    if (value === "0") {
      if (e.target.checked === false) {
        x = 0;
      } else {
        setCatChecked([...catChecked, value]);
        setCatCheckedValue([...catCheckedValue, value]);
        localStorage.setItem("catCheckedValue", "");
        localStorage.setItem("catChecked", "");
        x = 1;
      }
    }
    if (x === 0) {
      if (e.target.checked === true) {
        setCatChecked([...catChecked, value]);
        setCatCheckedValue([...catCheckedValue, value]);
        localStorage.setItem("catCheckedValue", [...catCheckedValue, value]);
        localStorage.setItem(
          "catChecked",
          [...catChecked, value].map((val) => "category[in][]=" + val).join("&")
        );
      } else if (e.target.checked === false) {
        //const newArr = catChecked.filter((i) => i !== value);
        localStorage.setItem(
          "catCheckedValue",
          catCheckedValue.filter((i) => i !== value)
        );
        setCatCheckedValue(catCheckedValue.filter((i) => i !== value));
        setCatChecked(catChecked.filter((i) => i !== value));
        ////////////////////////////////////عملناها كده عشان القيمة تتخزن و متكونش قيمة متأخرة
        localStorage.setItem(
          "catChecked",
          catChecked
            .filter((i) => i !== value)
            .map((val) => "category[in][]=" + val)
            .join("&")
        );
      }
    }
  };

  //ده الشكل اللي بتاع الباك اد متفق عليه لما ابعت كذا اختيار من المصنفات
  useEffect(() => {
    // console.log(catChecked);
    setTimeout(() => {
      getProduct();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catChecked]);

  //for checked brands
  const [brandChecked, setBrandChecked] = useState([]);
  let y = 0;
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      if (e.target.checked === false) {
        y = 0;
      } else {
        setBrandChecked([...brandChecked, value]);
        setBrandCheckedValue([...brandCheckedValue, value]);
        localStorage.setItem("brandCheckedValue", "");
        localStorage.setItem("brandChecked", "");
        y = 1;
      }
    }
    if (y === 0) {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
        setBrandCheckedValue([...brandCheckedValue, value]);
        localStorage.setItem("brandCheckedValue", [
          ...brandCheckedValue,
          value,
        ]);
        localStorage.setItem(
          "brandChecked",
          [...brandChecked, value].map((val) => "brand[in][]=" + val).join("&")
        );
      } else if (e.target.checked === false) {
        // const newArr = brandChecked.filter((i) => i !== value);
        localStorage.setItem(
          "brandCheckedValue",
          brandCheckedValue.filter((i) => i !== value)
        );
        setBrandCheckedValue(brandCheckedValue.filter((i) => i !== value));
        setBrandChecked(brandChecked.filter((i) => i !== value));
        localStorage.setItem(
          "brandChecked",
          brandChecked
            .filter((i) => i !== value)
            .map((val) => "brand[in][]=" + val)
            .join("&")
        );
      }
    }
  };
  //ده الشكل اللي بتاع الباك اد متفق عليه لما ابعت كذا اختيار من المصنفات
  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandChecked]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const priceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setFrom(e.target.value);
  };
  const priceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setTo(e.target.value);
  };
  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, to]);
  return [
    category,
    brand,
    clickCategory,
    clickBrand,
    priceFrom,
    priceTo,
    catChecked,
  ];
};

export default SidebarSearchHook;
