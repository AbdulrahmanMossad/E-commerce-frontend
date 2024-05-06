import { Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
import DeleteAddressHook from "../../hook/user/delete-address-hook";
import editicon from "./../../images/edit.png";
const UserAddressCard = ({ item }) => {
  const [show, handleClose, handleShow, handelDelete] = DeleteAddressHook(
    item._id
  );
  return (
    <div className="p-4 my-3 prod-container d-flex flex-column justify-content-between">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من عملية الحذف العنوان</div>
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

      <Row className="d-flex justify-content-between  ">
        <Col xs="12" sm="6">
          <div className="p-2">{item.alias}</div>
        </Col>
        <Col
          xs="12"
          sm="6"
          className="d-flex  justify-content-sm-end justify-content-center"
        >
          <div className="d-flex p-2 flex-wrap gap-1">
            <Link
              to={`/user/edit-address/${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex ">
                <img
                  alt=""
                  className="ms-1 mt-2"
                  src={editicon}
                  height="17px"
                  width="15px"
                />
                <p className="item-delete-edit"> تعديل</p>
              </div>
            </Link>
            <div onClick={handleShow} className="d-flex ">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> حذف</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            {item.details}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex flex-wrap gap-1">
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
            className=""
          >
            {item.phone}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddressCard;
