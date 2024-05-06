import React from "react";
import Pagination from "./../Utility/Pagination";
import { Row } from "react-bootstrap";
import UserGetAllOrderHook from "../../hook/user/user-get-all-order-hook";
import UserAllOrderItem from "./UserAllOrderItem";

const   UserAllOrder = () => {
  const [, results, paginate, orderData, onPress] = UserGetAllOrderHook();

  return (
    <div>
      <div className="admin-content-text pb-4">عدد الطلبات #{results}</div>
      <Row className="justify-content-between ">
        {orderData.length >= 1 ? (
          orderData.map((orderItem, index) => {
            return <UserAllOrderItem key={index} orderItem={orderItem} />;
          })
        ) : (
          <h6>لا يوجد طلبات حتى </h6>
        )}

        {paginate.numberOfPages >= 2 ? (
          <Pagination
            onPress={onPress}
            pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0}
          />
        ) : null}
      </Row>
    </div>
  );
};

export default UserAllOrder;
