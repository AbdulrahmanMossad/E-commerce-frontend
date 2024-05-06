import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";
import GetAllUserCartHook from "../../hook/cart/get-all-user-cart-hook";

const CartPage = () => {
  const [
    itemsNum,
    cartItems,
    totalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
    cartID,
  ] = GetAllUserCartHook();
  return (
    <Container style={{ minHeight: "670px" }} className=" my-5 prod-container">
      <Row>
        <div className=" mt-4 d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-start">
          <p className="cart-title">عربة التسوق</p>
          <i
            className="fa fa-shopping-cart fs-3 text-grey mx-4 mx-sm-0"
            aria-hidden="true"
          ></i>
        </div>
      </Row>
      <Row className="d-flex justify-content-center gap-4">
        <Col xs="11" md="8" className=" ">
          {cartItems ? (
            cartItems?.length >= 1 ? (
              cartItems.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })
            ) : (
              <h6>لا يوجد منتجات فى العربة</h6>
            )
          ) : (
            <h6>لا يوجد منتجات فى العربة</h6>
          )}
        </Col>

        <Col xs="11" md="3" className=" mb-4">
          <CartCheckout
            cartItems={cartItems}
            couponNameRes={couponNameRes}
            totalCartPriceAfterDiscount={totalCartPriceAfterDiscount}
            totalCartPrice={totalCartPrice}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
