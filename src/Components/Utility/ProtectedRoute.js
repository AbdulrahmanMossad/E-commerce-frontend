import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ auth, children }) => {
  if (auth === false) {
    return  window.location.href = "/";
  }
  //outlet means mor than on componet
  //children if i hve only one component inside <Route element={<ProtectedRoute auth={} />}> in app
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
