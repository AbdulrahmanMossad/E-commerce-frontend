import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminEditCoupon from "../../Components/Admin/AdminEditCoupon";
const AdminEditCouponPage = () => {
  return (
    <Container style={{ minHeight: "600px" }}>
      <Row className="py-3">
        <Col sm="3" xs="12" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="12" md="10">
          <AdminEditCoupon />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditCouponPage;
