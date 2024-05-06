import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddCouponHook from "../../hook/coupon/add-coupon-hook";
import AdminCoupnCard from "./AdminCoupnCard";

const AdminAddCoupon = () => {
  const dateRef = useRef();
  const [
    coupnName,
    couponDate,
    couponValue,
    onChangeName,
    onChangeDate,
    onChangeValue,
    onSubmit,
    coupons,
  ] = AddCouponHook();
  return (
    <div className="p-2">
      <div className="admin-content-text pb-4">اضف كوبون جديد</div>
      <div className="">
        <Row className="justify-content-start prod-container p-4">
          <Col sm="12">
            <input
              value={coupnName}
              onChange={onChangeName}
              type="text"
              className="input-form d-block mt-3 px-3 bg-white"
              placeholder="اسم الكوبون"
            />
            <input
              ref={dateRef}
              type="text"
              className="input-form d-block mt-3 px-3 bg-white"
              placeholder="تاريخ الانتهاء"
              onChange={onChangeDate}
              value={couponDate}
              onFocus={() => (dateRef.current.type = "date")}
              onBlur={() => (dateRef.current.type = "text")}
            />
            <input
              value={couponValue}
              onChange={onChangeValue}
              type="number"
              className="input-form d-block mt-3 px-3 bg-white"
              placeholder="نسبة خصم الكوبون"
            />
          </Col>
          <Col sm="12" className="d-flex justify-content-end ">
            <button onClick={onSubmit} className="btn-save d-inline mt-2 ">
              حفظ الكوبون
            </button>
          </Col>
        </Row>

        <Row>
          <Col sm="8">
            {coupons ? (
              coupons.map((item, index) => {
                return <AdminCoupnCard key={index} coupon={item} />;
              })
            ) : (
              <h6>لا يوجد كوبونات حتى الان</h6>
            )}
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminAddCoupon;
