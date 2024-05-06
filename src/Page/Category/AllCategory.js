import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";
import React from "react";
import AllCategoryPageHook from "../../hook/category/all-category-page-hook";
const AllCategory = () => {
  const [category, loading, getPage] = AllCategoryPageHook();
  return (
    <div style={{ minHeight: "400px" }} className="text-center ">
      {category ? (
        <CategoryContainer
          title={"كل المصنفات"}
          loading={loading}
          data={category.data}
        />
      ) : (
        <h1>لا يوجد مصنفات</h1>
      )}
      {category.paginationResult ? (
        category.paginationResult.numberOfPages > 1 ? (
          <Pagination
            pageCount={category.paginationResult.numberOfPages}
            onPress={getPage}
          />
        ) : null
      ) : null}
      {/* {category.paginationResult ? (
        <Pagination
          pageCount={category.paginationResult.numberOfPages}
          onPress={getPage}
        />
      ) : null} */}
    </div>
  );
};
export default AllCategory;
