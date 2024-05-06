import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserAllAddress from "../../Components/User/UserAllAddress";
import UserSideBar from "../../Components/User/UseSideBar";
const UserAllAddresPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="12" md="2">
          <UserSideBar />
        </Col>

        <Col sm="9" xs="12" md="10">
          <UserAllAddress />
        </Col>
      </Row>
    </Container>
  );
};

export default UserAllAddresPage;
