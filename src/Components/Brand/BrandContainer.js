import React from "react";
import BrandCard from "./BrandCard";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
const BrandContainer = ({ data, loading }) => {
  return (
    <Container>
      <SubTitle title={"كل الماركات"} />
      <Row className="d-flex justify-content-center gap-3 mt-3 mb-5 prod-container py-4">
        {loading === false ? (
          data ? (
            data?.map((item, index) => {
              return (
                <BrandCard
                  key={index}
                  id={item._id}
                  img={item.image}
                  background="#F4DBA4"
                  title={item.name}
                />
              );
            })
          ) : (
            <h1> لا يوجد ماركات</h1>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default BrandContainer;
