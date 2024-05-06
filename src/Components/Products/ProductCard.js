import React, { useEffect, useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import ProductCardHook from "../../hook/product/product-card-hook";
import { ToastContainer } from "react-toastify";
import "@imgly/background-removal";
import axios from "axios";

const ProductCard = ({ favProdID, item }) => {
  //there is problem in image cover data base in wishlist
  // const x = "http://127.0.0.1:8000/products/";
  const x = "https://e-commerce-backend-1-q982.onrender.com/products/";
  const y = item?.imageCover.slice(0,56);
  if (x === y) {
    item.imageCover = item.imageCover;
  } else {
    item.imageCover = x.concat(item?.imageCover);
  }
  // console.log(item?.imageCover)
  // console.log(x.concat(item?.imageCover.slice(31)))
  const [, , handelFav, favImg] = ProductCardHook(item, favProdID);

  // console.log(item);

  return (
    <div class="col-md-6 col-lg-4 mb-2 mb-lg-0 ">
      <div class="container py-3 ">
        <div class="card pro-card border-0 rounded-4">
          <div class="d-flex justify-content-between p-3  flex-wrap flex-sm-nowrap">
            <p class="sub-tile2 mb-0">Today's Offer</p>
            <div
              class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{ width: "35px", height: "35px" }}
            >
              <p class="text-white mb-0 small">x4</p>
            </div>
          </div>
          <Link
            to={`/products/${item._id}`}
            reloadDocument
            style={{ textDecoration: "none" }}
            className="d-flex justify-content-center"
          >
            <img
              src={item?.imageCover}
              class="card-img-top "
              style={{
                height: "250px",
                width: "80%",
                margin: "auto !important",
              }}
              alt="Laptop"
            />
          </Link>
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small">
                <a href={`/products/${item._id}`} class="text-muted"></a>
              </p>
              <img
                src={favImg}
                alt=""
                onClick={handelFav}
                className="text-center "
                style={{
                  height: "24px",
                  width: "26px",
                  cursor: "pointer",
                }}
              />
            </div>

            <div class="d-flex justify-content-between mb-3 flex-wrap flex-sm-nowrap d-inline">
              <h5 class="mb-0"> {item?.title}</h5>
              <h5 class="text-dark mb-0">{item.price} جنيه</h5>
            </div>

            <div class="d-flex justify-content-between mb-2 flex-wrap flex-sm-nowrap d-inline breaking-word">
              <p class="text-muted mb-0 ">
                Available: <span class="fw-bold">{item?.quantity}</span>
              </p>
              <div className="d-flex flex-wrap flex-sm-nowrap d-inline">
                <div className="card-rate mx-2 mt-1 ">
                  {item.ratingsAverage || 0}
                </div>
                <div class="ms-auto text-warning">
                  {item?.ratingsAverage > 1 ? (
                    Array.from({ length: item.ratingsAverage }).map(
                      (_, index) => <i key={index} className="fa fa-star"></i>
                    )
                  ) : (
                    <i className="far fa-star"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
    //   <Card
    //     className="my-2"
    //     style={{
    //       width: "100%",
    //       height: "345px",
    //       borderRadius: "8px",
    //       border: "none",
    //       backgroundColor: "#FFFFFF",
    //       boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
    //     }}
    //   >
    //     <Link
    //       to={`/products/${item._id}`}
    //       reloadDocument
    //       style={{ textDecoration: "none" }}
    //     >
    //       <Card.Img
    //         style={{ height: "228px", width: "100%" }}
    //         src={item?.imageCover}
    //       />
    //     </Link>
    //     <div className="d-flex justify-content-end mx-2">
    //       <img
    //         src={favImg}
    //         alt=""
    //         onClick={handelFav}

    //         className="text-center "
    //         style={{
    //           height: "24px",
    //           width: "26px",
    //           cursor:"pointer"
    //         }}
    //       />
    //     </div>
    //     <Card.Body>
    //       <Card.Title>
    //         <div className="card-title">{item.title}</div>
    //       </Card.Title>
    //       <Card.Text>
    //         <div className="d-flex justify-content-between ">
    //           <div className="d-flex">
    //             <img
    //               className=""
    //               src={rate}
    //               alt=""
    //               height="16px"
    //               width="16px"
    //             />
    //             <div className="card-rate mx-2">{item.ratingsAverage||0}</div>
    //           </div>
    //           <div className="d-flex">
    //             <div className="card-price">{item.price}</div>
    //             <div className="card-currency mx-1">جنيه</div>
    //           </div>
    //         </div>
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //   <ToastContainer/>
    // </Col>
  );
};

export default ProductCard;
