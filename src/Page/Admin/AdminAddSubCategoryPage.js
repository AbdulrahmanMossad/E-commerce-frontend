import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddSubCategory from "../../Components/Admin/AdminAddSubCategory";
const AdminAddSubCategoryPage = () => {
  return (
    <Container style={{ minHeight: "600px" }}>
      <Row className="py-3">
        <Col sm="3" xs="12" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="12" md="10">
          <AdminAddSubCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddSubCategoryPage;