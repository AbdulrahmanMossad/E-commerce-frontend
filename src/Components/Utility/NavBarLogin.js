import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";

import NavbarSearcHook from "../../hook/search/navbar-searc-hook";
import GetAllUserCartHook from "../../hook/cart/get-all-user-cart-hook";
const NavBarLogin = () => {
  let path = window.location.pathname;
  let [onChangeSearch, searchWord] = NavbarSearcHook();
  if (path === "/products") {
    if (localStorage.getItem("searchWord") !== null) {
      searchWord = localStorage.getItem("searchWord");
      if (document.getElementById("abdulrahman"))
        document.getElementById("abdulrahman").focus();
    }
  }
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };
  const openNav = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const closeNav = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const [show, setShow] = useState(false);
  const [itemsNum] = GetAllUserCartHook();
  return (
    <div className="banner_bg_main" dir="ltr">
      <div className="container">
        <div className="header_section_top">
          <div className="row">
            <div className="col-sm-12">
              <div className="custom_menu">
                <ul dir="ltr">
                  <li>
                    <a href="/allbrand"> أشهر الماركات</a>
                  </li>

                  <li>
                    <a href="/products">أحدث الازياء</a>
                  </li>

                  <li>
                    <a href="/products">الاكثر مبيعا</a>
                  </li>

                  <li>
                    <a href="/allcategory">المصنفات</a>
                  </li>
                  <li>
                    <a href="/">الرئيسية</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logo_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="logo">
                <a href="/">
                  <img src="./pro/logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- logo section end -->
    <!-- header section start --> */}
      <div className="header_section">
        <div className="container">
          <div className="containt_main">
            {show ? (
              <div className="sidenav">
                <a href="/" className="closebtn" onClick={closeNav}>
                  &times;
                </a>
                <a href="/">الرئيسية</a>
                <a href="/allcategory">المصنفات</a>
                <a href="/products">الأكثر مبيعا</a>
                <a href="/products">أحدث الأزياء</a>
                <a href="/allbrand"> أشهر الماركات</a>
              </div>
            ) : null}

            <span className="toggle_icon">
              <img src="./pro/toggle-icon.png" alt="" onClick={openNav} />
            </span>

            <a
              className="btn btn-secondary mb-3"
              type="button"
              href="/products"
            >
              افضل العروض
            </a>

            <div className="main">
              {/* <!-- Another variation with a button --> */}
              <div className="input-group">
                <input
                  dir="rtl"
                  type="text"
                  className="form-control"
                  placeholder="ابحث ..."
                  onChange={onChangeSearch}
                  value={searchWord}
                  id="abdulrahman"
                  autoComplete="off"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    style={{ backgroundColor: "#f26522", border: "#f26522" }}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="header_box">
              <div className="login_menu" dir="ltr">
                <ul>
                  <li>
                    {user != "" && user.role !== "admin" ? (
                      <a
                        href="/cart"
                        className=" position-relative  p-2"
                        dir="ltr"
                      >
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        <span className="padding_10">العربة</span>
                        <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger ">
                          {itemsNum || 0}
                        </span>
                      </a>
                    ) : null}
                  </li>
                  <li>
                    <a href="#">
                      {user != "" ? (
                        <i className="fa fa-user" aria-hidden="true"></i>
                      ) : null}
                      {user != "" ? (
                        <span className="padding_10">
                          {" "}
                          {user.role === "admin" ? (
                            <a href="/admin/allproducts" dir="rtl">
                              لوحة التحكم
                            </a>
                          ) : (
                            <a href="/user/profile">{user.name}</a>
                          )}
                        </span>
                      ) : (
                        <span className="padding_10">
                          <a href="/login">دخول</a>
                        </span>
                      )}
                    </a>
                    <a className="ml-3" onClick={logOut} href="/" dir="ltr">
                      <i className="fa fa-user " aria-hidden="true"></i>
                      {user != "" ? (
                        <span className="padding_10">تسجيل الخروج</span>
                      ) : null}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- header section end -->
    <!-- banner section start --> */}
      <div className="banner_section layout_padding">
        <div className="container">
          <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="banner_taital" dir="rtl">
                      الحق العرض ! <br />
                      بخصم 20 %
                    </h1>
                    <div className="buynow_bt">
                      <a href="/cart">اشتري دلوقتي</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="banner_taital" dir="rtl">
                      دليلك لشوبينج متكامل <br />
                      انضم الان
                    </h1>
                    <div className="buynow_bt">
                      <a href="#">اشتري دلوقتي</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="banner_taital" dir="rtl">
                      الصيف بدأ !<br />
                      عروض كتير بدأت معاه
                    </h1>
                    <div className="buynow_bt">
                      <a href="#">اشتري دلوقتي</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#my_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#my_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- banner section end --> */}
    </div>
    // <Navbar classNameName="sticky-top" bg="dark" variant="dark" expand="sm">
    //   <Container>
    //     <Navbar.Brand>
    //       <a href="/">
    //         <img src={logo} classNameName="logo" alt="" />
    //       </a>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <FormControl
    //         type="search"
    //         placeholder="ابحث..."
    //         classNameName="me-2 w-100 text-center"
    //         aria-label="Search"
    //         onChange={onChangeSearch}
    //         value={searchWord}
    //         id="abdulrahman"
    //       />
    //       <Nav classNameName="me-auto">
    //         {user != "" ? (
    //           <NavDropdown title={user.name} id="basic-nav-dropdown">
    //             {user.role === "admin" ? (
    //               <NavDropdown.Item href="/admin/allproducts">
    //                 لوحة التحكم
    //               </NavDropdown.Item>
    //             ) : (
    //               <NavDropdown.Item href="/user/profile">
    //                 الصفحه الشخصية
    //               </NavDropdown.Item>
    //             )}
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item onClick={logOut} href="/">
    //               تسجيل خروج
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //         ) : (
    //           <Nav.Link
    //             href="/login"
    //             classNameName="nav-text d-flex mt-3 justify-content-center"
    //           >
    //             <img src={login} classNameName="login-img" alt="sfvs" />
    //             <p style={{ color: "white" }}>دخول</p>
    //           </Nav.Link>
    //         )}
    //         <Nav.Link
    //           href="/cart"
    //           classNameName="nav-text position-relative d-flex mt-3 justify-content-center"
    //           style={{ color: "white" }}
    //         >
    //           <img src={cart} classNameName="login-img" alt="sfvs" />
    //           <p style={{ color: "white" }}>العربه</p>
    //           <span classNameNameName="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger">
    //             {itemsNum || 0}
    //           </span>
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavBarLogin;
