import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./../Products/ProductCard";
import Pagination from "../Utility/Pagination";
import CardContainerHook from "../../hook/product/card-container-hook";
const UserFavoriteProduct = () => {
  const [favProdID, favProd] = CardContainerHook();
  console.log(favProd);
  return (
    <div>
      <div className="admin-content-text ">قائمة المفضلة</div>
      <Row className="justify-content-start">
        {favProd?.length >= 1 ? (
          favProd?.map((item, index) => {
            return (
              <ProductCard key={index} favProdID={favProdID} item={item} />
            );
          })
        ) : (
          <h6>لايوجد منتجات</h6>
        )}
      </Row>
      {/* <Pagination /> */}
    </div>
  );
};

export default UserFavoriteProduct;
