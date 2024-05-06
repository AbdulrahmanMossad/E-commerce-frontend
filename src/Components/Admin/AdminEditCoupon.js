import React from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import EditCouponHook from "../../hook/coupon/edit-coupon-hook";
import { useParams } from "react-router-dom";

const AdminEditCoupon = () => {
  const { id } = useParams();
  const [
    coupnName,
    couponDate,
    couponValue,
    onChangeName,
    onChangeDate,
    onChangeValue,
    onSubmit,
  ] = EditCouponHook(id);

  return (
    <div className="p-2">
      <div className="admin-content-text pb-4">تعديل بيانات الكوبون</div>

      <Row className="justify-content-start prod-container p-4">
        <Col sm="11">
          <input
            value={coupnName}
            onChange={onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3 bg-white"
            placeholder="اسم الكوبون"
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3 bg-white"
            placeholder="تاريخ الانتهاء"
            onChange={onChangeDate}
            value={couponDate}
          />
          <input
            value={couponValue}
            onChange={onChangeValue}
            type="number"
            className="input-form d-block mt-3 px-3 bg-white"
            placeholder="نسبة خصم الكوبون"
          />
        </Col>
        <Col sm="11" className="d-flex justify-content-end ">
          <button onClick={onSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديل
          </button>
        </Col>
      </Row>

      <ToastContainer />
    </div>
  );
};

export default AdminEditCoupon;
