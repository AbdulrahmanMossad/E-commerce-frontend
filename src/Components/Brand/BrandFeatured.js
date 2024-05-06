import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Utility/SubTitle";
import HomeBrandHook from "../../hook/brand/home-brand-hook";

const BrandFeatured = ({ title, btntitle }) => {
  const [loading, brand] = HomeBrandHook();
  console.log(brand);
  return (
    <Container className="">
      <SubTitle title={title} btntitle={btntitle} pathText={"/allbrand"} />
      <Row className="my-2 d-flex justify-content-between ">
        {loading === false ? (
          brand.data ? (
            brand.data.slice(1, 6).map((item, index) => {
              return (
                <BrandCard
                  key={index}
                  img={item.image}
                  id={item._id}
                  name={item.name}
                  background="#F4DBA4"
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

export default BrandFeatured;
