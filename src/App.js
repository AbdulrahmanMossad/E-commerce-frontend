import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import Footer from "./Components/Utility/Footer";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCategory from "./Page/Category/AllCategory";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/products/ShopProductsPage";
import ProductDetailsPage from "./Page/products/ProductDetailsPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethoudPage from "./Page/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Page/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage ";
import UserAllAddresPage from "./Page/User/UserAllAddresPage ";
import UserEditAddressPage from "./Page/User/UserEditAddressPage";
import UserAddAddressPage from "./Page/User/UserAddAddressPage ";
import UserProfilePage from "./Page/User/UserProfilePage ";
import AdminEditProductPage from "./Page/Admin/AdminEditProductPage";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./Page/Auth/VerifyPasswordPage";
import RsetPasswordPage from "./Page/Auth/RsetPasswordPage";
import AdminAddCouponPage from "./Page/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./Page/Admin/AdminEditCouponPage";
import ProtectedRouteHook from "./hook/auth/protected-route-hook";
import ProtectedRoute from "./Components/Utility/ProtectedRoute";
import ProductsByCategory from "./Page/products/ProductsByCategory";
import ProductsByBrand from "./Page/products/ProductsByBrand";
import NavBarLoginNoHome from "./Components/Utility/NavBarLoginNoHome";

function App() {
  const [isUser, isAdmin, userData] = ProtectedRouteHook();
  // console.log(isUser);
  // console.log(isAdmin);
  // console.log(userData);
  const url = window.location.pathname;
  console.log(url);
  return (
    <div className="font">
      {url !== "/" ? <NavBarLoginNoHome /> : <NavBarLogin />}
      {/* <NavBarLoginNoHome /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute auth={!isUser && !isAdmin} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/user/forget-password"
              element={<ForgetPasswordPage />}
            />
            <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
            <Route path="/user/reset-password" element={<RsetPasswordPage />} />
          </Route>
          <Route path="/allcategory" element={<AllCategory />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route
            path="/products/category/:id"
            element={<ProductsByCategory />}
          />
          <Route path="/products/brand/:id" element={<ProductsByBrand />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route
              path="/admin/allproducts"
              element={<AdminAllProductsPage />}
            />
            <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
            <Route
              path="/admin/addcategory"
              element={<AdminAddCategoryPage />}
            />
            <Route
              path="/admin/addsubcategory"
              element={<AdminAddSubCategoryPage />}
            />

            <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />

            <Route
              path="/admin/orders/:id"
              element={<AdminOrderDetalisPage />}
            />

            <Route
              path="/admin/editproduct/:id"
              element={<AdminEditProductPage />}
            />

           
            <Route
              path="/admin/addproduct"
              element={<AdminAddProductsPage />}
            />
 
            <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
            <Route
              path="/admin/editcoupon/:id"
              element={<AdminEditCouponPage />}
            />
            {/*  */}
          </Route>

          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="/user/allorders" element={<UserAllOrdersPage />} />
            <Route
              path="/user/favoriteproducts"
              element={<UserFavoriteProductsPage />}
            />
            <Route path="/user/addresses" element={<UserAllAddresPage />} />
            <Route
              path="/user/edit-address/:id"
              element={<UserEditAddressPage />}
            />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route path="/user/profile" element={<UserProfilePage />} />
          </Route>

          <Route
            path="/order/paymethoud"
            element={
              <ProtectedRoute auth={isUser}>
                <ChoosePayMethoudPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
