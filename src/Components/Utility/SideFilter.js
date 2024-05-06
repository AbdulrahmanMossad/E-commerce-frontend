import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import SidebarSearchHook from "../../hook/search/sidebar-search-hook";

const SideFilter = () => {
  const [
    category,
    brand,
    clickCategory,
    clickBrand,
    priceFrom,
    priceTo,
    catChecked,
  ] = SidebarSearchHook();
  let localFrom = "0";
  let localTo = "0";
  if (localStorage.getItem("priceFrom")) {
    localFrom = localStorage.getItem("priceFrom");
  }
  if (localStorage.getItem("priceTo")) {
    localTo = localStorage.getItem("priceTo");
  }
  // console.log(catChecked);
  if (localStorage.getItem("catCheckedValue")) {
    const catCheckedValue = localStorage.getItem("catCheckedValue");
    if (catCheckedValue) {
      console.log(catCheckedValue);
      // catChecked
      //   .split(",")
      //   .map((item) => (document.getElementById(item)?document.getElementById(item).checked = true:null));
      // // catChecked.map((i) => console.log(i));
    }
  }
  if (localStorage.getItem("brandCheckedValue")) {
    const brandCheckedValue = localStorage.getItem("brandCheckedValue");
    if (brandCheckedValue) {
      console.log(brandCheckedValue);
    }
  }
  return (
    <div className="mt-3 ">
      <Row className="">
        <div
          className="col-6  col-sm-12 d-sm-block d-flex flex-column mt-2"
          dir="ltr"
        >
          <div className="filter-title text-center mb-3 mt-3">
            <a
              role="button"
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              className="search-words"
            >
              <i class="fa-solid fa-caret-down m-1"></i>
              الفئة
            </a>
          </div>
          <div
            id="collapseOne"
            class="panel-collapse collapse show"
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div className="form-check form-switch panel-body">
              <input
                type="checkbox"
                value="0"
                className="form-check-input"
                onChange={clickCategory}
              />
              <div className="form-check-label filter-sub  ">الكل</div>
            </div>
            {category ? (
              category.map((item, index) => {
                return (
                  <div className=" form-check form-switch" key={index}>
                    <input
                      type="checkbox"
                      value={item._id}
                      id={item._id}
                      onChange={clickCategory}
                      className="form-check-input"
                      checked={
                        localStorage
                          .getItem("catCheckedValue")
                          ?.includes(item._id)
                          ? true
                          : false
                      }
                    />
                    <label
                      className="form-check-label filter-sub"
                      for={item._id}
                    >
                      {item.name}
                    </label>
                  </div>
                );
              })
            ) : (
              <h3>لا يوجد مصنفات</h3>
            )}
          </div>
        </div>
        <div
          className="col-6  col-sm-12 d-sm-block d-flex flex-column  mt-2"
          dir="ltr"
        >
          <div className="filter-title text-center mb-3 mt-3 ">
            <a
              role="button"
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
              className="search-words"
            >
              <i class="fa-solid fa-caret-down m-1"></i>
              الماركة
            </a>
          </div>
          <div
            id="collapseTwo"
            class="panel-collapse collapse show"
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div className="form-check form-switch panel-body">
              <input
                type="checkbox"
                value="0"
                onChange={clickBrand}
                className="form-check-input"
              />
              <div className="form-check-label filter-sub   ">الكل</div>
            </div>
            {brand ? (
              brand.map((item, index) => {
                return (
                  <div className="form-check form-switch" key={index}>
                    <input
                      type="checkbox"
                      value={item._id}
                      onChange={clickBrand}
                      className="form-check-input"
                      checked={
                        localStorage
                          .getItem("brandCheckedValue")
                          ?.includes(item._id)
                          ? true
                          : false
                      }
                    />
                    <div className="form-check-label filter-sub">
                      {item.name}
                    </div>
                  </div>
                );
              })
            ) : (
              <h3>لا يوجد ماركات</h3>
            )}
          </div>
        </div>
        <div className="col-6  col-sm-12 d-sm-block mb-5 d-flex flex-column ">
          <div className="filter-title text-center mb-3 mt-3">
            <a
              role="button"
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
              className="search-words"
            >
              السعر
              <i class="fa-solid fa-caret-down m-1"></i>
            </a>
          </div>
          <div
            id="collapseThree"
            class="panel-collapse collapse show"
            role="tabpanel"
            aria-labelledby="collapseThree"
          >
            <div className="d-flex panel-body">
              <p className="filter-sub my-2 m-0">من:</p>
              <input
                onChange={priceFrom}
                value={localFrom}
                className="m-2 text-center user-input  "
                type="number"
                style={{ width: "50px", height: "25px" }}
              />
            </div>
            <div className="d-flex">
              <p className="filter-sub my-2 m-0">الي:</p>
              <input
                onChange={priceTo}
                value={localTo}
                className="m-2 text-center user-input"
                type="number"
                style={{ width: "50px", height: "25px" }}
              />
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
