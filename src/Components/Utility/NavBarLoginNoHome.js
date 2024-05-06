import React, { useEffect, useState } from "react";

import logoWeb3 from "../../images/logo-final3.png";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  NavDropdown,
  Row,
} from "react-bootstrap";
import login from "../../images/login.png";
import NavbarSearcHook from "../../hook/search/navbar-searc-hook";
import GetAllUserCartHook from "../../hook/cart/get-all-user-cart-hook";
const NavBarLoginNoHome = () => {
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

  const [itemsNum] = GetAllUserCartHook();
  return (
    <Navbar className="sticky-top p-3 " bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img
              src={logoWeb3}
              className=" ml-2 mt-1 p-0 "
              alt=""
              style={{ width: "70px", height: "60px" }}
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className=" ml-2  mb-lg-0 mb-2 "
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <ul
            class="navbar-nav  gap-1 gap-md-3 "
            style={{ whiteSpace: "nowrap", color: "#f26522 !important" }}
          >
            <li class="nav-item ">
              <a class="nav-link" href="/">
                الرئيسية <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/allcategory">
                المصنفات
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/products">
                الاكثر مبيعا
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/products">
                أحدث الازياء
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-3" href="/allbrand">
                أشهر الماركات
              </a>
            </li>
          </ul>
          <FormControl
            type="search"
            placeholder="ابحث..."
            className="me-auto w-100 text-center ml-lg-3"
            aria-label="Search"
            onChange={onChangeSearch}
            value={searchWord}
            id="abdulrahman"
            autoComplete="off"
          />
          <Nav>
            <div
              className="d-flex mt-3  d-flex flex-wrap flex-sm-nowrap justify-content-center mt-lg-0 "
              dir="ltr"
            >
              {user != "" ? (
                <div className="d-flex justify-content-center mt-lg-1  mr-sm-2">
                  <NavDropdown title={user.name} id="basic-nav-dropdown">
                    {user.role === "admin" ? (
                      <NavDropdown.Item href="/admin/allproducts">
                        لوحة التحكم
                      </NavDropdown.Item>
                    ) : (
                      <NavDropdown.Item href="/user/profile">
                        الصفحه الشخصية
                      </NavDropdown.Item>
                    )}
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut} href="/">
                      تسجيل خروج
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              ) : (
                <Nav.Link
                  href="/login"
                  className="nav-text d-flex align-content-center justify-content-center "
                >
                  <img src={login} className="login-img mt-0 mb-0" alt="sfvs" />
                  <p style={{ color: "white" }} className="mt-0 mb-0 mr-2 ml-1">
                    دخول
                  </p>
                </Nav.Link>
              )}
              {user != "" && user.role !== "admin" ? (
                <div className="d-flex mt-sm-0  d-flex justify-content-center mt-lg-0">
                  <a
                    href="/cart"
                    className="position-relative  p-2  ml-2  "
                    dir="ltr"
                  >
                    <i
                      className="fa fa-shopping-cart fs-3"
                      aria-hidden="true"
                    ></i>

                    <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger ">
                      {itemsNum || 0}
                    </span>
                  </a>
                </div>
              ) : null}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLoginNoHome;
