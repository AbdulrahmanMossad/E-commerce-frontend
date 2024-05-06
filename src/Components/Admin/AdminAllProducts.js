import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = ({ items }) => {
  return (
    <div className="p-2">
      <div className="admin-content-text ">ادارة جميع المنتجات</div>
      <Row className="d-flex justify-content-center prod-container p-4 gap-5  mt-4">
        {items.data ? (
          items.data.map((item, index) => {
            return <AdminAllProductsCard key={index} item={item} />;
          })
        ) : (
          <h3>لا يوجد منتجات حتي الان</h3>
        )}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
