import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useLocation } from "react-router-dom";


// NEW imports
import MultiRoleLogin from "./auth/MultiRoleLogin";
import AdminDashboard from "./dashboards/Admin/AdminDashboard";
import DoctorDashboard from "./dashboards/Doctor/DoctorDashboard";
import PatientDashboard from "./dashboards/Patient/PatientDashboard";
import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
 
  const location = useLocation();
  const currentPath = location.pathname;
  const hideHeaderFooterPaths = [
    "/role-login",
    "/admin",
    "/doctor",
    "/patient"
  ];

  const hideLayout = hideHeaderFooterPaths.some((p) =>
    currentPath.startsWith(p)
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!hideLayout && <Header />}

      <main style={{ flex: 1 }}>
        <Routes>
          {/* Existing routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Navigate to="/role-login" replace />} />
          <Route path="/register" element={<Register />} />

          {/* <Route
            path="/dashboard/*"
            element={
              sessionStorage.getItem("clinica_token") ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          /> */}

          {/* MULTI-ROLE LOGIN */}
          <Route path="/role-login" element={<MultiRoleLogin />} />

          {/* ROLE DASHBOARDS */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allow={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctor"
            element={
              <ProtectedRoute allow={["doctor"]}>
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/patient"
            element={
              <ProtectedRoute allow={["patient"]}>
                <PatientDashboard />
              </ProtectedRoute>
            }
          />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}
