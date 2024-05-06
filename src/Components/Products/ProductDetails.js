import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProuductText from "./ProuductText";

const ProductDetails = () => {
  return (
    <Container className="p-3">
      <div className="admin-content-text py-3">تفاصيل المنتج </div>
      <Row className="py-3 prod-container justify-content-between ">
        <Col xs="12" sm="6" md="5" lg="4">
          <ProductGallery />
        </Col>
        <Col xs="12" sm="6" md="7" lg="8">
          <ProuductText />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
