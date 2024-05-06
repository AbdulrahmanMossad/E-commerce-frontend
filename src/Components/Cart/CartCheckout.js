import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ApplayCouponHook from "../../hook/cart/applay-coupon-hook";
import DeleteCartHook from "../../hook/cart/delete-cart-hook";
import { notify } from "../../hook/useNotification";
const CartCheckout = ({
  cartItems,
  totalCartPrice,
  totalCartPriceAfterDiscount,
  couponNameRes,
}) => {
  const [handelDeleteCart] = DeleteCartHook();

  const [couponName, onChangeCoupon, handelSubmitCoupon] = ApplayCouponHook();

  useEffect(() => {
    if (couponNameRes) {
      onChangeCoupon(couponNameRes);
    }
  }, [couponNameRes]);
  const navigation = useNavigate();
  const hndelCheckout = () => {
    if (cartItems?.length > 0) {
      navigation("/order/paymethoud");
    } else {
      notify("اضف منتجات للعربة اولا", "warn");
    }
  };
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout py-3">
      <Col xs="12" className="d-flex  flex-column text-center">
        <div className="d-flex text-center ">
          <input
            value={couponName}
            onChange={(e) => onChangeCoupon(e.target.value)}
            className="copon-input d-inline text-center rounded-right"
            placeholder="كود الخصم"
          />
          <button
            onClick={handelSubmitCoupon}
            className="copon-btn d-inline rounded-left"
          >
            تطبيق
          </button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          {totalCartPriceAfterDiscount >= 1
            ? `${totalCartPrice} جنيه ... بعد الخصم ${totalCartPriceAfterDiscount} `
            : `${totalCartPrice} جنيه`}
        </div>

        <button className="product-cart-add d-inline" onClick={hndelCheckout}>
          {" "}
          اتمام الشراء
        </button>
        <button
          onClick={handelDeleteCart}
          className="product-cart-add w-100 px-2 my-1"
        >
          {" "}
          مسح العربة
        </button>
      </Col>
      <ToastContainer />
    </Row>
  );
};

export default CartCheckout;
