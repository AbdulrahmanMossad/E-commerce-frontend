import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserAllOrderItem from "../User/UserAllOrderItem";
import GetOrderDetalisHook from "../../hook/admin/get-order-detalis-hook";
import ChangeOrderStatusHook from "../../hook/admin/change-order-status-hook";

const AdminOrderDetalis = () => {
  const { id } = useParams();
  const [orderData, cartItems] = GetOrderDetalisHook(id);

  const [
    formatDate,
    onChangePaid,
    changePayOrder,
    onChangeDeliver,
    changeDeliverOrder,
  ] = ChangeOrderStatusHook(id);

  return (
    <div className="p-2">
      <UserAllOrderItem orderItem={orderData} />
      <div className="p-2">
        <Row className="justify-content-center mt-2  prod-container p-2 gap-2 ">
          <Col xs="12" className=" d-flex  flex-wrap">
            <div className="admin-content-text py-2">تفاصيل العميل</div>
          </Col>
          <Col xs="12" className="d-flex flex-wrap">
            <div
              style={{
                color: "#555550",
                fontFamily: "Almarai",
                fontSize: "16px",
              }}
            >
              الاسم:
            </div>

            <div
              style={{
                color: "#979797",
                fontFamily: "Almarai",
                fontSize: "16px",
              }}
              className="mx-2"
            >
              {orderData ? (orderData.user ? orderData.user.name : "") : ""}
            </div>
          </Col>

          <Col xs="12" className="d-flex flex-wrap">
            <div
              style={{
                color: "#555550",
                fontFamily: "Almarai",
                fontSize: "16px",
              }}
            >
              رقم الهاتف:
            </div>

            <div
              style={{
                color: "#979797",
                fontFamily: "Almarai",
                fontSize: "16px",
              }}
              className="mx-2"
            >
              {orderData ? (orderData.user ? orderData.user.phone : "") : ""}
            </div>
          </Col>
          <Col xs="12" className="d-flex flex-wrap">
            <div
              style={{
                color: "#555550",
                fontFamily: "Almarai",
                fontSize: "16px",
              }}
            >
              الايميل:
            </div>

            <div
              style={{
                color: "#979797",
                fontFamily: "Almarai",
                fontSize: "16px",
              }}
              className="mx-2 breaking-word"
            >
              {orderData ? (orderData.user ? orderData.user.email : "") : ""}
            </div>
          </Col>
          <div className="d-flex mt-2 justify-content-center flex-wrap gap-1">
            <div className="d-flex ">
              <select
                name="pay"
                id="paid"
                onChange={onChangePaid}
                className="select input-form-area mt-1  text-center w-100 w-sm-25"
              >
                <option value="0">الدفع</option>
                <option value="true">تم</option>
                <option value="false">لم يتم</option>
              </select>
              <button
                onClick={changePayOrder}
                className="btn-a px-2 d-inline mx-1 "
              >
                حفظ{" "}
              </button>
            </div>
            <div className="d-flex ">
              <select
                onChange={onChangeDeliver}
                name="deliver"
                id="deliver"
                className="select input-form-area mt-1  text-center  w-100 w-sm-50"
              >
                <option value="0">التوصيل</option>
                <option value="true">تم</option>
                <option value="false">لم يتم</option>
              </select>
              <button
                onClick={changeDeliverOrder}
                className="btn-a px-2 d-inline mx-1 "
              >
                حفظ{" "}
              </button>
            </div>
          </div>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminOrderDetalis;
