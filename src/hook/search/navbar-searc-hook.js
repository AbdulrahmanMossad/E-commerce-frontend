import  { useEffect, useState } from "react";
import ViewSerchProductsHook from "../product/view-serch-products-hook";

const NavbarSearcHook = () => {
  const [searchWord, setSearchWord] = useState("");
  const [, , , getProduct] = ViewSerchProductsHook();
  let path = window.location.pathname;
  const onChangeSearch = (e) => {
    if (path !== "/products") {
      // localStorage.removeItem("searchWord");
      window.location.href = "/products";
      localStorage.setItem("sea", e.target.value);
    }
    setSearchWord(e.target.value);
    console.log(searchWord);
    //السطر ده للتسريع لو حذفته اما اجي اكتب حرف في السيرش هيتاخر شوية
    localStorage.setItem("searchWord", e.target.value);

    localStorage.setItem("sea", e.target.value);
  };
  useEffect(() => {
    //عشان السيرش بار يبقي فاضي لما اكون في اي صفحة تانية لما اتنقل
    if (path !== "/products") {
      localStorage.removeItem("searchWord");
    }
    if (path === "/products") {
      if (localStorage.getItem("sea")) {
        localStorage.setItem("searchWord", localStorage.getItem("sea"));
      }
    }
    setTimeout(() => {
      getProduct();
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord]);
  return [onChangeSearch, searchWord];
};

export default NavbarSearcHook;
