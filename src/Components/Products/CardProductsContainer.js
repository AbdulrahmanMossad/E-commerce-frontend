import React from "react";
import SubTitle from "../Utility/SubTitle";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import CardContainerHook from "../../hook/product/card-container-hook";

const CardProductsContainer = ({ title, btntitle, pathText, data }) => {
  const [favProdID, favProd] = CardContainerHook();
  return (
    <Container className="mb-3 p-3 ">
      {data ? (
        <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}
      <Row className="my-2 d-flex prod-container">
        {data ? (
          data.length > 0 ? (
            data?.map((item, index) => (
              <ProductCard key={index} favProdID={favProdID} item={item} />
            ))
          ) : (
            <h3>لا يوجد منتجات ...</h3>
          )
        ) : (
          <h3>لا يوجد منتجات ...</h3>
        )}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
