import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllOrders from "../../Components/Admin/AdminAllOrders";
import Pagination from "../../Components/Utility/Pagination";
const AdminAllOrdersPage = () => {
  return (
    <Container>
      <Row className="py-3" style={{ minHeight: "600px" }}>
        <Col sm="3" xs="12" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="12" md="10">
          <AdminAllOrders />
        </Col>
      </Row>
    </Container>
  );
};
export default AdminAllOrdersPage;
