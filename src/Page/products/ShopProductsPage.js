import React from "react";
import Pagination from "../../Components/Utility/Pagination";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Utility/SearchCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../Components/Utility/SideFilter";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ViewSerchProductsHook from "../../hook/product/view-serch-products-hook";
const ShopProductsPage = () => {
  const [items, pagination, onPress, getProduct, results] =
    ViewSerchProductsHook();
  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }
  return (
    <div style={{ minHeight: "670" }} className="mb-4">
      {/* <CategoryHeader /> */}
      <Container>
        <SearchCountResult
          onClick={getProduct}
          title={`هناك ${results} منتجات `}
        />
        <Row className="d-flex flex-column flex-sm-row justify-content-between prod-container">
          <Col sm="2" xs="12" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="9" xs="12" md="10">
            <CardProductsContainer data={items} title="" btntitle="" />
          </Col>
        </Row>
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={onPress} />
        ) : null}
      </Container>
    </div>
  );
};

export default ShopProductsPage;
