import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import add from "../../images/add.png";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import AdminAddProductsHook from "../../hook/product/add-products-hook";
const AdminAddProducts = () => {
  const [
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
    handleChangeComplete,
    removeColor,
    onSelectCategory,
    handleSubmit,
    onSelectBrand,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
    BrandID,
  ] = AdminAddProductsHook();
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };
  return (
    <div className="p-2">
      <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
      <div className=" prod-container   p-4 ">
        <Row className="justify-content-start">
          <Col sm="11">
            <div className="text-form pb-2"> صور للمنتج</div>
            {/* using react select multi image input library */}
            <MultiImageInput
              images={images}
              setImages={setImages}
              color="white"
              theme={"light"}
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
              className="input-form-area p-2 mt-3 bg-white"
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
              placeholder="سعر المنتج"
              value={priceAftr}
              onChange={onChangePriceAfter}
            />
            <input
              type="number"
              className="input-form d-block mt-3 px-3 bg-white"
              placeholder="الكمية المتاحة "
              value={qty}
              onChange={onChangeQty}
            />
            <select
              name="cat"
              id="lang"
              className="select input-form-area mt-3 px-2  bg-white"
              onChange={onSelectCategory}
            >
              <option value="0">التصنيف الرئيسي</option>
              {Array.isArray(category.data)
                ? category.data.map((item) => {
                    return <option value={item._id}> {item.name}</option>;
                  })
                : null}
            </select>
            {/* ///////////////////////////////we use muultiselect-react-dropdown library ////////////////////////////  */}
            <Multiselect
              className="mt-2 text-end"
              placeholder="التصنيف الفرعي"
              options={options}
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="name"
              style={{ color: "red" }}
            />
            {/* //////////////////////////////////////////////////////////////////////// */}
            <select
              name="brand"
              id="brand"
              className="select input-form-area mt-3 px-2 bg-white"
              onChange={onSelectBrand}
            >
              <option value="0">الماركة</option>
              {Array.isArray(brand.data)
                ? brand.data.map((item) => {
                    return <option value={item._id}> {item.name}</option>;
                  })
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
                src={add}
                alt=""
                width="30px"
                height="35px"
                className=""
                style={{ cursor: "pointer" }}
                onClick={onChangeColor}
              />
              {showColor === true ? (
                <CompactPicker onChangeComplete={handleChangeComplete} />
              ) : null}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="11" className="d-flex justify-content-end ">
            <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
              حفظ التعديلات
            </button>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminAddProducts;
