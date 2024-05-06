import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ViewAllProductsCategoryHook from "../../hook/product/view-all-products-category-hook";
import Pagination from "../../Components/Utility/Pagination";

const ProductsByCategory = () => {
  const { id } = useParams();
  //   console.log(id);
  const [items, pagination, onPress] = ViewAllProductsCategoryHook(id);
  console.log(items);
  if (pagination) var pageCount = pagination;
  else pageCount = 0;
  return (
    <div style={{ minHeight: "670px" }}>
      <Container>
        <Row className="d-flex flex-row">
          <Col sm="12">
            <CardProductsContainer
              data={items}
              title=""
              btntitle=""
              pathText=""
            />
          </Col>
        </Row>
        <Pagination pageCount={pageCount} onPress={onPress} />
      </Container>
    </div>
  );
};

export default ProductsByCategory;
