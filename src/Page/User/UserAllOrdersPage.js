import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import UserAllOrder from "../../Components/User/UserAllOrder";
import UserSideBar from "../../Components/User/UseSideBar";
const UserAllOrdersPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="12" md="2">
          <UserSideBar />
        </Col>

        <Col sm="9" xs="12" md="10">
          <UserAllOrder />
        </Col>
      </Row>
    </Container>
  );
};

export default UserAllOrdersPage;
