import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BrandCard = ({ img, id, title, background }) => {
  return (
    <Col
      className="my-5 d-flex justify-content-center  flex-xs-wrap cat-card"
    >
      <div className="allCard mb-3">
        <div
          className="categoty-card"
          style={{ backgroundColor: `${background}` }}
        ></div>{" "}
        <Link
          to={`/products/brand/${id}`}
          style={{ textDecoration: "none" }}
          reloadDocument
        >
          <img alt="" src={img} className="categoty-card-img" />
          <p className="categoty-card-text my-2 mb-5">{title}</p>
        </Link>
      </div>
    </Col>
  );
};

export default BrandCard;
