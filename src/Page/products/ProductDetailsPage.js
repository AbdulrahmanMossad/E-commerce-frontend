import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../hook/product/view-product-details-hook";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [item, images, cat, brand, prod] = ViewProductDetailsHook(id);
  if (prod) var items = prod.slice(0, 4);
  if (item) {
    var rateAvg = item.ratingsAverage;
    var rateQty = item.ratingsQuantity;
  }

  return (
    <div style={{ minHeight: "670px" }}>
      {/* <CategoryHeader /> */}
      <Container>
        <ProductDetails />
        <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
        <CardProductsContainer title={"منتجات قد تعجبك"} data={items} />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
