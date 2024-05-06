import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserSideBar from "../../Components/User/UseSideBar";
import UserEditAddress from "../../Components/User/UserEditAddress ";
const UserEditAddressPage = () => {
  return (
    <Container style={{ minHeight: "500px" }} >
      <Row className="py-3">
        <Col sm="3" xs="12" md="2">
          <UserSideBar />
        </Col>

        <Col sm="9" xs="12" md="10">
          <UserEditAddress />
        </Col>
      </Row>
    </Container>
  );
};
export default UserEditAddressPage;
