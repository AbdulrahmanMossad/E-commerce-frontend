import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import rate from "../../images/rate.png";
import { ToastContainer } from "react-toastify";
import DeleteRateHook from "../../hook/review/delete-rate-hook";
import deleteicon from "./../../images/delete.png";
import editicon from "./../../images/edit.png";
import EditRateHook from "../../hook/review/edit-rate-hook";
import ReactStars from "react-rating-stars-component";
const RateItem = ({ review }) => {
  const [isUser, handelDelete, handleShow, handleClose, showDelete] =
    DeleteRateHook(review);
  const [
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    handelEdit,
    onChangeRateText,
    newRateText,
    OnChangeRateValue,
    newRateValue,
  ] = EditRateHook(review);
  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: newRateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      OnChangeRateValue(newValue);
    },
  };

  return (
    <div>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من حذف التقييم</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handelDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تعديل التقييم</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactStars {...setting} />
          <input
            onChange={onChangeRateText}
            value={newRateText}
            type="text"
            className="font w-100"
            style={{ border: "none" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleCloseEdit}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handelEdit}>
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3">
        <Col className="d-felx  me-1 me-sm-5  flex-wrap flex-sm-nowrap">
          <div className="rate-name  d-inline ms-3 mt-1">
            {review.user.name}
          </div>
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{review.rating}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx  pb-2">
          <div className="rate-description  d-inline me-1 me-sm-5">
            {review.review}
          </div>
          {isUser === true ? (
            <div className="d-inline d-flex justify-content-end ">
              <div class="image-with-title" title="delete">
                <img
                  src={deleteicon}
                  onClick={handleShow}
                  width="20px"
                  height="20px"
                  style={{ cursor: "pointer" }}
                  alt="delete"
                />
              </div>
              <div class="image-with-title" title="edit">
                <img
                  src={editicon}
                  onClick={handleShowEdit}
                  width="18px"
                  height="18px"
                  style={{ cursor: "pointer" }}
                  alt="delete"
                />
              </div>
            </div>
          ) : null}
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default RateItem;
