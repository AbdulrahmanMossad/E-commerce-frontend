import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import addSubcategoryHook from "../../hook/subcategory/add-subcategory-hook";
const AdminAddSubCategory = () => {
  const [name, handleChange, category, handleSubmit, onChangeName] =
    addSubcategoryHook();
  return (
    <div className="p-2">
      <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
      <Row className="prod-container p-4 ">
        <Col sm="12">
          <input
            type="text"
            className="input-form d-block mt-3 px-3 bg-white"
            placeholder="اسم التصنيف الفرعي"
            onChange={onChangeName}
            value={name}
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2 "
            onChange={handleChange}
          >
            <option value="0">اختر تصنيف رئيسي </option>
            {Array.isArray(category.data) ? (
              category.data.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })
            ) : (
              <option value="val">لا يوجد مصنفات </option>
            )}
          </select>
        </Col>

        <Col sm="12" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategory;
