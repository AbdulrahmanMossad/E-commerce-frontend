import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import add from "../../images/add.png";
import MultiImageInput from "react-multiple-image-input";

import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import AdminEditProductHook from "../../hook/product/edit-product-hook";

const AdminEditProduct = () => {
  const { id } = useParams();

  const [
    CatID,
    BrandID,
    onChangeDesName,
    onChangeQty,
    onChangeColor,
    onChangePriceAfter,
    onChangePriceBefor,
    onChangeProdName,
    showColor,
    category,
    brand,
    priceAftr,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handelChangeComplete,
    removeColor,
    onSeletCategory,
    handelSubmit,
    onSeletBrand,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
    seletedSubID,
  ] = AdminEditProductHook(id);
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };
  //   console.log(options);
  return (
    <div className="p-2">
      <div className="admin-content-text pb-4"> تعديل المنتج - {prodName}</div>
      <div className="prod-container p-4">
        <Row className="justify-content-start ">
          <Col sm="12">
            <div className="text-form pb-2"> صور للمنتج</div>
            <MultiImageInput
              images={images}
              setImages={setImages}
              theme={"light"}
              allowCrop={false}
              max={4}
              cropConfig={{ crop, ruleOfThirds: true }}
            />

            <input
              value={prodName}
              onChange={onChangeProdName}
              type="text"
              className="input-form d-block mt-3 px-3 bg-white"
              placeholder="اسم المنتج"
            />
            <textarea
              className="input-form-area p-2 mt-3 bg-white "
              rows="4"
              cols="50"
              placeholder="وصف المنتج"
              value={prodDescription}
              onChange={onChangeDesName}
            />
            <input
              type="number"
              className="input-form d-block mt-3 px-3 bg-white"
              placeholder="السعر قبل الخصم"
              value={priceBefore}
              onChange={onChangePriceBefor}
            />
            <input
              type="number"
              className="input-form d-block mt-3 px-3 bg-white"
              placeholder="السعر بعد الخصم"
              value={priceAftr}
              onChange={onChangePriceAfter}
            />
            <input
              type="number"
              className="input-form d-block mt-3 px-3 bg-white"
              placeholder="الكمية المتاحة"
              value={qty}
              onChange={onChangeQty}
            />
            <select
              name="cat"
              value={CatID}
              onChange={onSeletCategory}
              className="select input-form-area mt-3 px-2 bg-white "
            >
              <option value="0">التصنيف الرئيسي</option>
              {category
                ? category.data
                  ? category.data.map((item, index) => {
                      return (
                        <option key={index} value={item._id}>
                          {item.name}
                        </option>
                      );
                    })
                  : null
                : null}
            </select>

            <Multiselect
              className="mt-2 text-end bg-white"
              placeholder="التصنيف الفرعي"
              options={options}
              onSelect={onSelect}
              onRemove={onRemove}
              // selectedValues={options}
              displayValue="name"
              style={{ color: "red" }}
            />
            <select
              name="brand"
              value={BrandID}
              onChange={onSeletBrand}
              className="select input-form-area mt-3 px-2 bg-white"
            >
              <option value="0">اختر ماركة</option>
              {brand
                ? brand.data
                  ? brand.data.map((item, index) => {
                      return (
                        <option key={index} value={item._id}>
                          {item.name}
                        </option>
                      );
                    })
                  : null
                : null}
            </select>
            <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
            <div className="mt-1 d-flex flex-wrap">
              {colors
                ? colors.map((color, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => removeColor(color)}
                        className="color ms-2 border  mt-1"
                        style={{ backgroundColor: color }}
                      ></div>
                    );
                  })
                : null}

              <img
                onClick={onChangeColor}
                src={add}
                alt=""
                width="30px"
                height="35px"
                style={{ cursor: "pointer" }}
              />
              {showColor === true ? (
                <CompactPicker onChangeComplete={handelChangeComplete} />
              ) : null}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="d-flex justify-content-end ">
            <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
              حفظ التعديلات
            </button>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminEditProduct;
