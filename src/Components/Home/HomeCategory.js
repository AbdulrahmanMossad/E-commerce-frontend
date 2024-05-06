import SubTitle from "../Utility/SubTitle";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import HomeCategoryHook from "../../hook/category/home-category-hook";
const HomeCategory = () => {
  const [loading, category] = HomeCategoryHook();
  console.log(category);
  return (
    <Container>
      <SubTitle
        title={"المصنفات"}
        btntitle={"المزيد"}
        pathText={"/allcategory"}
      />
      <Row className="my-2 d-flex justify-content-between cat-container">
        {loading === false ? (
          category?.data ? (
            category?.data.slice(1, 6).map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  img={item.image}
                  background="#F4DBA4"
                  title={item.name}
                  id={item._id}
                />
              );
            })
          ) : (
            <h1> لا يوجد مصنفات</h1>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
