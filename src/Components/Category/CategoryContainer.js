import SubTitle from "../Utility/SubTitle";
import CategoryCard from "./CategoryCard";
import { Container, Row, Spinner } from "react-bootstrap";
const CategoryContainer = ({ title, loading, data }) => {
  return (
    <Container>
      <SubTitle title={title} />
      <Row className=" d-flex justify-content-center gap-3 mt-3 mb-5 prod-container py-4">
        {loading === false ? (
          data ? (
            data?.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  id={item._id}
                  img={item.image}
                  background="#F4DBA4"
                  title={item.name}
                />
              );
            })
          ) : (
            <h1>لا يوجد مصنفات</h1>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
