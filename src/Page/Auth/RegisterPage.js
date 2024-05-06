import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterHook from "../../hook/auth/register-hook";
import { ToastContainer } from "react-toastify";
const RegisterPage = () => {
  const [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ] = RegisterHook();
  return (
    <section class="background-radial-gradient overflow-hidden" style={{ minHeight: "400px" }}>
      <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div class="row gx-lg-5 align-items-center mb-5">
          <div class="col-lg-6 mb-5 mb-lg-0 paragra" style={{ zIndex: "10" }}>
            <h1
              class="my-4 display-5 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              افضل العروض <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                اختر الافضل لك
              </span>
            </h1>
            <p
              class="mb-4 opacity-60 paragra"
              style={{ color: "hsl(218, 81%, 85%)" }}
            >
              تُعد المنصة الخيار الأفضل للتسوق عبر الانترنت في مصر، لالتزامها
              بتقديم تجربة عملاء بمستوى عالمي. يحتوي الموقع على ملايين المنتجات
              الأصلية من المنتجات الإلكترونية للأزياء، وألعاب الأطفال، والأدوات
              المنزلية، والأثاث، ولوازم الرياضة، والمنتجات الخارجية، لوازم
              البيبي, لوازم الجمال, والكتب، والأدوات المكتبية، ولوازم السوبر
              ماركت، وأكتر بكتير كموقع يهتم بعملائه، نلتزم بتوفير المنتجات
              الأصلية وأفضل العلامات التجارية وبجودة عالية مستمرة.
            </p>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              class="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              class="position-absolute shadow-5-strong"
            ></div>

            <div
              class="card "
              style={{
                borderRadius: "15px",
                backgroundColor: "rgba(255,255,255,.7)",
                boxShadow:
                  "rgba(0, 0, 0, 0.9) 0px 19px 38px,rgba(0, 0, 0, 0.22) 0px 15px 12px",
              }}
            >
              <div class="card-body px-4 py-5 px-md-5 ">
                <div className="text-center">
                  <div
                    data-mdb-input-init
                    class="form-outline mb-4  text-center"
                  >
                    <label className="mx-auto title-login">
                      تسجيل حساب جديد
                    </label>
                    <input
                      type="text"
                      value={name}
                      placeholder="اسم المستخدم..."
                      onChange={onChangeName}
                      class="user-input my-3 text-center mx-auto"
                    />
                  </div>

                  <div className="form-outline mb-4 text-center">
                    <input
                      
                      type="email"
                      onChange={onChangeEmail}
                      placeholder="الايميل..."
                      value={email}     
                      className="user-input text-center mx-auto"
                    />
                  </div>
                  
                  <div className="form-outline mb-4 text-center">
                    <input
                      
                      type="phone"
                      onChange={onChangePhone}
                      value={phone}
                      placeholder="الهاتف..."
                      className="user-input text-center mx-auto"
                    />
                  </div>
                  
                  <div className="form-outline mb-4 text-center">
                    <input
                      
                      type="password"
                      onChange={onChangePassword}
                      value={password}
                      placeholder="كلمه السر..."
                      className="user-input text-center mx-auto"
                    />
                  </div>
                  <div className="form-outline mb-4 text-center">
                    <input
                      required
                      type="password"
                      onChange={onChangeConfirmPassword}
                      value={confirmPassword}
                      placeholder="تأكيد كلمة السر ..."
                      className="user-input text-center mx-auto"
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn-login  mb-4 "
                    onClick={onSubmit}
                  >
                    تسجيل الحساب
                  </button>

                  <div class="text-center d-flex">
                    <label className="mx-auto my-4">
                      {" "}
                      لديك حساب بالفعل؟{" "}
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        {" "}
                        <span
                          style={{ cursor: "pointer" }}
                          className="text-danger"
                        >
                          {" "}
                          اضغط هنا{" "}
                        </span>{" "}
                      </Link>{" "}
                    </label>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
    // <Container style={{ minHeight: "680px" }}>
    //   <Row className="py-5 d-flex justify-content-center hieght-search">
    //     <Col sm="12" className="d-flex flex-column ">
    //       <label className="mx-auto title-login">تسجيل حساب جديد</label>
    //       <input
    //         value={name}
    //         placeholder="اسم المستخدم..."
    //         type="text"
    //         className="user-input mt-3 text-center mx-auto"
    //         onChange={onChangeName}
    //       />
    //       <input
    //         value={email}
    //         placeholder="الايميل..."
    //         type="email"
    //         className="user-input my-3 text-center mx-auto"
    //         onChange={onChangeEmail}
    //       />
    //       <input
    //         value={phone}
    //         placeholder="الهاتف..."
    //         type="phone"
    //         className="user-input my-3 text-center mx-auto "
    //         onChange={onChangePhone}
    //       />
    //       <input
    //         value={password}
    //         onChange={onChangePassword}
    //         
    //         placeholder="كلمه السر..."
    //         type="password"
    //         className="user-input text-center mx-auto"
    //       />
    //       <input
    //         value={confirmPassword}
    //         onChange={onChangeConfirmPassword}
    //         placeholder="تأكيد كلمة السر ..."
    //         type="password"
    //         className="user-input text-center mx-auto mt-4"
    //       />
    //       <button onClick={onSubmit}className="btn-login mx-auto mt-4">تسجيل الحساب</button>
    //       <label className="mx-auto my-4">
    //         لديك حساب بالفعل؟{" "}
    //         <Link to="/login" style={{ textDecoration: "none" }}>
    //           <span style={{ cursor: "pointer" }} className="text-danger">
    //             اضغط هنا
    //           </span>
    //         </Link>
    //       </label>
    //     </Col>
    //   </Row>
    //   <ToastContainer />
    // </Container>
  );
};

export default RegisterPage;
