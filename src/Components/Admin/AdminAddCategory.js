import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCategoryHook from "../../hook/category/add-category-hook";
const AdminAddCategory = () => {
  const [
    img,
    name,
    loading,
    isPress,
    handelSubmit,
    onImageChange,
    onChangeName,
  ] = AddCategoryHook();
  return (
    <div className="p-2">
      <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
      <Row className=" prod-container p-4 ">
        <Col sm="12">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="100%"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              id="upload-photo"
              onChange={onImageChange}
            />
          </div>
          <input
            type="text"
            className="input-form d-block mt-3 px-3 bg-white"
            placeholder="اسم التصنيف"
            onChange={onChangeName}
            value={name}
          />
        </Col>
        <Col sm="12" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handelSubmit}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>

      {isPress ? (
        loading ? (
          <Spinner variant="primary" animation="border" />
        ) : null
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddCategory;
