import React, { useState } from "react";
import { Col, Card, Row, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProducts } from "../../redux/actions/productsAction";
const AdminAllProductsCard = ({ item }) => {
  console.log(item);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handelDelete = async () => {
    if (localStorage.getItem("token") !== null) {
      await dispatch(deleteProducts(item._id));
      setShow(false);
      window.location.reload();
    }
  };

  return (
    <Col xs="12" sm="12" md="5" lg="4" className="d-flex prod-container">
      {/* modal in react bootstrap */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من عملية الحذف للمنتج</div>
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

      <Card
        className="my-2"
        style={{
          width: "100%",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between flex-wrap">
            <div onClick={handleShow} className="d-inline item-delete-edit">
              <i class="fa-solid fa-trash fa-icon"></i>
            </div>
            <Link
              to={`/admin/editproduct/${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-inline item-delete-edit">
                <i class="fa-solid fa-pen-to-square fa-icon"></i>
              </div>
            </Link>
          </Col>
        </Row>
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={item.imageCover}
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between flex-wrap">
              <div className="text-dark">{item.title}</div>
              <div className="d-flex flex-wrap">
                <div className="card-price">{item.price}</div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </Card.Title>
            <Card.Text>
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
              {/* <div className="d-flex justify-content-between flex-wrap">
                <div className="card-rate fw-bold breaking-word  mt-1">
                  Available : {item.quantity}
                </div>
                <div className="d-flex flex-wrap">
                  <div className="card-price">{item.price}</div>
                  <div className="card-currency mx-1">جنيه</div>
                </div>
              </div> */}
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;
