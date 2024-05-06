import React from "react";
import Silder from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import ViewHomeProductsHook from "../../hook/product/view-home-products-hook";
const HomePage = () => {
  // localStorage.clear();
  const [data] = ViewHomeProductsHook();
  // console.log(data);
  return (
    <div
      className="font"
      style={{
        minHeight: "670px",
        backgroundColor: "",
      }}
    >
      {/* <Silder /> */}
      <HomeCategory />
      <CardProductsContainer
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText={"/products"}
        data={data}
      />
      <DiscountSection />
      <CardProductsContainer
        title="احدث الازياء"
        btntitle="المزيد"
        pathText={"/products"}
        data={data}
      />
      <BrandFeatured title="اشهر الماركات" btntitle="عرض المزيد" />
    </div>
  );
};
export default HomePage;
