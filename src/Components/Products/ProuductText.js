import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../hook/product/view-product-details-hook";
import AddToCartHook from "../../hook/cart/add-to-cart-hook";
import { ToastContainer } from "react-toastify";
const ProductText = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [item, images, cat, brand, prod] = ViewProductDetailsHook(id);
  const [colorClick, indexColor, addToCartHandel] = AddToCartHook(id, item);
  return (
    <Container className="">
      <Row className="mt-2 flex-wrap flex-sm-nowrap">
        <div className="cat-text">{cat.name} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline flex-wrap flex-sm-nowrap">
            {item.title}
            <div className="cat-rate d-inline mx-3">{item.ratingsAverage}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4 flex-wrap flex-sm-nowrap">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{brand.name}</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex flex-wrap flex-sm-nowrap">
          {item.availableColors
            ? item.availableColors.map((color, index) => {
                return (
                  <div
                    key={index}
                    className="color ms-2 mb-1"
                    // style={{backgroundColor: color,border:"solid 10px black" }}
                    // style={select===true?{border:"solid 1px red"}:null}
                    style={{
                      backgroundColor: color,
                      border: indexColor === index ? "3px solid black" : "none",
                    }}
                    onClick={() => colorClick(index, color)}
                  ></div>
                );
              })
            : null}
          <div className="cat-text d-inline ">
            الكمية المتاحة : {item.quantity}{" "}
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4 ">
        <Col className="d-flex flex-wrap flex-sm-nowrap gap-3">
          <div className="product-price d-inline border   mb-1">
            {item.price} جنية
          </div>
          <div
            onClick={addToCartHandel}
            className="product-cart-add  d-inline "
          >
            اضف للعربة
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ProductText;
