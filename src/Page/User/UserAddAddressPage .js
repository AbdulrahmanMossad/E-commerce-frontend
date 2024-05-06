import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import UserAddAddress from "../../Components/User/UserAddAddress";
import UserSideBar from "../../Components/User/UseSideBar";

const UserAddAddressPage = () => {
  return (
    <Container style={{ minHeight: "500px" }}>
      <Row className="py-3">
        <Col sm="3" xs="12" md="2">
          <UserSideBar />
        </Col>

        <Col sm="9" xs="12" md="10">
          <UserAddAddress />
        </Col>
      </Row>
    </Container>
  );
};
export default UserAddAddressPage;
