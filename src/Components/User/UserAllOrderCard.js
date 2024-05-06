import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserAllOrderCard = ({ item }) => {
  //there is problem in image cover data base in wishlist
  // const x = "http://127.0.0.1:8000/products/";
  const x = "https://e-commerce-backend-1-q982.onrender.com/products/";
  const y = item?.product?.imageCover.slice(0, 56);
  if (x === y) {
    item.product.imageCover = item.product.imageCover;
  } else {
    item.product.imageCover = x.concat(item?.product?.imageCover);
  }
  return (
    <Row className="d-flex mb-2 flex-wrap  align-items-center mb-3">
      <Col xs="12" sm="6" lg="4" className=" ">
        <Link
          to={`/products/${item.product._id}`}
          style={{ textDecoration: "none" }}
        >
          <img
            width="100%"
            height="100%"
            src={item.product.imageCover}
            alt=""
          />
        </Link>
      </Col>
      <Col xs="12" sm="6" lg="8" className="d-flex flex-column flex-wrap">
        <div className="d-inline pt-2 cat-title">
          {item.product.title || ""}
        </div>
        <div className="d-inline pt-2 cat-rate me-2">
          {item.product.ratingsAverage ? item.product.ratingsAverage : 0}
        </div>
        <div className="rate-count d-inline p-1 pt-2">
          ({`${item.product.ratingsQuantity || 0} تقييم`})
        </div>
        <div className="mt-3 d-flex flex-wrap ">
          <div className="cat-text mt-1  d-inline">الكميه</div>
          <input
            value={item.count}
            className="mx-2 "
            type="number"
            style={{ width: "40px", height: "30px" }}
          />
          <div
            className="color  d-inline"
            style={{ backgroundColor: item.color }}
          ></div>
        </div>
      </Col>
    </Row>
  );
};

export default UserAllOrderCard;
