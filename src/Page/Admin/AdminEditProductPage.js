import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddProducts from "../../Components/Admin/AdminAddProducts";
import AdminEditProduct from "../../Components/Admin/AdminEditProduct";

const AdminEditProductPage = () => {
  return (
    <Container style={{ minHeight: "600px" }}>
      <Row className="py-3">
        <Col sm="3" xs="12" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="12" md="10">
          <AdminEditProduct />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditProductPage;
