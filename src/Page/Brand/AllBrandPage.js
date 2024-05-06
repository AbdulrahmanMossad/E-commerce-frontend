import React from "react";
import Pagination from "../../Components/Utility/Pagination";
import BrandContainer from "../../Components/Brand/BrandContainer";
import AllBrandPageHook from "../../hook/brand/all-brand-page";
const AllBrandPage = () => {
  const [brand, loading, getPage] = AllBrandPageHook();
  return (
    <div style={{ minHeight: "400px" }}className="text-center ">
      {brand ? (
        <BrandContainer data={brand.data} loading={loading} />
      ) : (
        <h1>لا يوجد مصنفات</h1>
      )}
      {brand.paginationResult ? (
        brand.paginationResult.numberOfPages > 1 ? (
          <Pagination
            pageCount={brand.paginationResult.numberOfPages}
            onPress={getPage}
          />
        ) : null
      ) : null}
    </div>
  );
};
export default AllBrandPage;
