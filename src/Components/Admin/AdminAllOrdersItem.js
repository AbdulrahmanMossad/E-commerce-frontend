import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile from "../../images/mobile.png";
const AdminAllOrdersItem = ({ orderItem }) => {
  // console.log(orderItem)
  return (
    <Col sm="12" className="prod-container p-2 gap-2  mt-4">
      <Link
        to={`/admin/orders/${orderItem._id}`}
        className="cart-item-body-admin my-2 px-1 d-flex px-2"
        style={{ textDecoration: "none" }}
      >
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">
                طلب رقم #{orderItem.id}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col
              sm="12"
              className=" d-flex flex-row justify-content-start flex-wrap"
            >
              <div className="d-inline pt-2 cat-title">
                طلب من.. {orderItem.user.name || ""}
              </div>
              <div
                style={{ color: "brown" }}
                className="d-inline pt-2 cat-rate me-2 breaking-word"
              >
                {" "}
                {orderItem.user.email || ""}
              </div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between">
            <Col xs="12" sm="6" className="d-flex flex-wrap">
              <div>
                <div style={{ color: "black" }} className="d-inline">
                  {" "}
                  التوصيل
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isDelivered === true ? "تم التوصيل" : "لم يتم "}
                </div>
              </div>
              <div>
                <div style={{ color: "black" }} className="d-inline">
                  {" "}
                  الدفع
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isPaid === true ? "تم الدفع" : "لم يتم "}
                </div>
              </div>

              <div>
                <div style={{ color: "black" }} className="d-inline">
                  طرقة الدفع
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.paymentMethodType === "cash"
                    ? "كاش"
                    : "بطاقة ائتمانية"}
                </div>
              </div>
            </Col>
            <Col
              xs="12"
              sm="6"
              className="d-flex justify-content-start justify-content-sm-end"
            >
              <div>
                <div className="barnd-text">
                  {orderItem.totalOrderPrice || 0} جنية
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
};

export default AdminAllOrdersItem;
