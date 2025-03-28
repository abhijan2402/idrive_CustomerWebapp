import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  console.log("Auth Status:", isAuthenticated); // ✅ Check if authentication is working

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
