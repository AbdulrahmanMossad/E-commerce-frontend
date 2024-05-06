import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Utility/Pagination";
import ViewProductAdminHook from "../../hook/admin/view-product-admin-hook";

const AdminAllProductsPage = () => {
  // const [pageCount, setPageCount] = useState(1);
  const [items, pagination, onPress] = ViewProductAdminHook();
  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }

  return (
    <Container style={{ minHeight: "600px" }}>
      <Row className="py-3">
        <Col sm="3" xs="12" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="12" md="10">
          <AdminAllProducts items={items} />
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={onPress} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
