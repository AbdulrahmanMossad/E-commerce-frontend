import React from "react";
import { Row, Col } from "react-bootstrap";
import UserAllOrderCard from "./UserAllOrderCard";

const UserAllOrderItem = ({ orderItem }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  if (orderItem) {
    console.log(orderItem);
  }
  return (
    <div className=" mt-2 p-4 prod-container d-flex flex-column justify-content-between">
      <Row>
        <div className="py-2 order-title">
          طلب رقم #{orderItem.id || 0} ...تم بتاريخ{" "}
          {formatDate(orderItem.createdAt)}
        </div>
      </Row>

      {orderItem.cartItems
        ? orderItem.cartItems.map((item, index) => {
            return <UserAllOrderCard key={index} item={item} />;
          })
        : null}

      <Row className="d-flex justify-content-between  flex-wrap">
        <Col className="d-flex flex-wrap">
          <div className="d-flex">
            <div className="d-inline"> التوصيل</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isDelivered === true ? "تم التوصيل" : "لم يتم "}
            </div>
          </div>
          <div className="d-flex">
            <div className="d-inline"> الدفع</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isPaid === true ? "تم الدفع" : "لم يتم "}
            </div>
          </div>

          <div className="d-flex">
            <div className="d-inline">طريقة الدفع</div>
            <div className="d-inline mx-2 stat">
              {orderItem.paymentMethodType === "Cash"
                ? "كاش"
                : "بطاقة ائتمانية"}
            </div>
          </div>
        </Col>
        <Col className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">
              {orderItem.totalOrderPrice || 0} جنية
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderItem;
