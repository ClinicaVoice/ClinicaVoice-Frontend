// src/auth/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ allow, children }) {
  const token = sessionStorage.getItem("clinica_token");
  const role = sessionStorage.getItem("clinica_role");

  if (!token || !role) {
    return <Navigate to="/role-login" replace />;
  }

  // allowed roles: ["admin"], ["doctor"], ["patient"]
  if (allow.includes(role)) {
    return children;
  }

  // logged in but wrong role → bounce to correct dashboard
  return <Navigate to={`/${role}`} replace />;
}
