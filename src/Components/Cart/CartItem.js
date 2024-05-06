import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import DeleteCartHook from "../../hook/cart/delete-cart-hook";
const CartItem = ({ item }) => {

  const [
    ,
    show,
    handleClose,
    handleShow,
    handelDeleteItem,
    itemCount,
    onChangeCount,
    handeleUpdateCart,
  ] = DeleteCartHook(item);
  // const x = "http://127.0.0.1:8000/products/";
  const x = "https://e-commerce-backend-1-q982.onrender.com/products/";
    const y = item?.product?.imageCover.slice(0, 56);
    if (x === y) {
      item.product.imageCover = item?.product?.imageCover;
    } else {
      item.product.imageCover = x.concat(item?.product?.imageCover);
    }
 

  return (  
    <Col
      xs="12"
      className="cart-item-body my-4 d-flex prod-container p-4 flex-wrap flex-md-nowrap breaking-word "
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من حذف المنتج من العربة</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handelDeleteItem}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      <Col md="6">
        <img
          style={{ width: "100%", height: "100%" }}
          src={item?.product?.imageCover || mobile}
          alt=""
        />
      </Col>
      <div className="w-100 d-flex flex-column justify-content-evenly">
        <Row className="justify-content-between">
          <Col
            sm="12"
            className=" d-flex flex-row justify-content-between flex-wrap "
          >
            <div className="d-inline pt-2 cat-text">
              {item.product.category ? item.product.category.name : ""}
            </div>
            <div
              onClick={handleShow}
              className="d-flex pt-2 flex-wrap "
              style={{ cursor: "pointer" }}
            >
              <img src={deleteicon} alt="" width="20px" height="24px" />
              <div className="cat-text d-inline me-2">ازاله</div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2 ">
          <Col
            sm="12"
            className=" d-flex flex-row justify-content-start flex-wrap "
          >
            <div className="d-inline pt-2 cat-title">
              {item.product.title || ""}
            </div>
            <div className="d-inline pt-2 cat-rate me-2">
              {item.product ? item.product.ratingsAverage : 0}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">
              {item.product.brand ? item.product.brand.name : ""}{" "}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex flex-wrap ">
            {item.color === "" ? null : (
              <div
                className="color ms-2 border"
                style={{ backgroundColor: `${item.color}` }}
              ></div>
            )}
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col
            sm="12"
            className=" d-flex flex-row justify-content-center justify-content-sm-between gap-1 align-items-center flex-wrap "
          >
            <div className="d-inline pt-2 d-flex flex-wrap  gap-1 justify-content-center">
              <div className="cat-text mt-2  d-inline ">الكميه</div>
              <input
                value={itemCount}
                onChange={onChangeCount}
                className="mx-2 text-center rounded-2 "
                type="number"
                style={{ width: "60px", height: "40px" }}
              />
              <Button onClick={handeleUpdateCart} className="btn btn-dark">
                تطبيق
              </Button>
            </div>
            <div className="d-inline pt-2 barnd-text ">
              {item.price || 0} جنية
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CartItem;
