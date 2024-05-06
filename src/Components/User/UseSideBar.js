import React from "react";
import { Link } from "react-router-dom";

const UserSideBar = () => {
  return (
    <div className="sidebar pb-4 ">
      <div className="d-flex flex-row flex-sm-column justify-content-evenly flex-wrap gap-1 gap-sm-0">
        <div className="gap-1">
          <Link to="/user/allorders" style={{ textDecoration: "none" }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center prod-container">
              اداره الطلبات
            </div>
          </Link>
          <Link to="/user/favoriteproducts" style={{ textDecoration: "none" }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center prod-container">
              المنتجات المفضلة
            </div>
          </Link>
        </div>
        <div className="">
          <Link to="/user/addresses" style={{ textDecoration: "none" }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center prod-container">
              العنوانين الشخصية
            </div>
          </Link>

          <Link to="/user/profile" style={{ textDecoration: "none" }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center prod-container">
              الملف الشخصي
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UserSideBar;
