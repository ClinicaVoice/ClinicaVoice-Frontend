// src/layouts/DoctorLayout.jsx
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  IconButton
} from "@mui/material";

import {
  Dashboard,
  People,
  Mic,
  Article,
  Settings,
  Logout,
  Menu as MenuIcon
} from "@mui/icons-material";

import DashboardHeader from "../components/DashboardHeader";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const drawerWidth = 230;

export default function DoctorLayout({ children, active, onNavChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItems = [
    { key: "dashboard", label: t("doctor_dashboard"), icon: <Dashboard /> },
    { key: "patients", label: t("doctor_patients"), icon: <People /> },
    { key: "upload", label: t("doctor_upload_audio"), icon: <Mic /> },
    { key: "reports", label: t("doctor_reports"), icon: <Article /> },
    { key: "settings", label: t("doctor_settings"), icon: <Settings /> },
  ];

  const drawer = (
    <Box sx={{ height: "100%", bgcolor: "#2E3A59", color: "#fff" }}>
      <Typography variant="h6" align="center" sx={{ py: 3, fontWeight: 700 }}>
        Doctor Panel
      </Typography>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.key}
            selected={active === item.key}
            onClick={() => onNavChange(item.key)}
            sx={{
              "&.Mui-selected": {
                bgcolor: "#26A69A",
                borderRadius: 1,
                mx: 1,
              },
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      <ListItemButton
        onClick={() => {
          sessionStorage.clear();
          navigate("/role-login");
        }}
        sx={{ mt: "auto", color: "white" }}
      >
        <ListItemIcon sx={{ color: "white" }}>
          <Logout />
        </ListItemIcon>
        <ListItemText primary={t("nav_logout")} />
      </ListItemButton>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#F9FAFB" }}>

      {/* Permanent drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#2E3A59",
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Temporary (mobile) drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* MAIN CONTENT AREA */}
      {/* MAIN CONTENT AREA */}
<Box
  sx={{
    flexGrow: 1,
    marginLeft: { md: `${drawerWidth}px` },  // ONLY margin needed
    backgroundColor: "#F9FAFB",
    minHeight: "100vh",
    overflowX: "hidden",
  }}
>
  {/* Header (full width, aligned with content) */}
  <DashboardHeader onMenuClick={() => setMobileOpen(true)} />

  {/* Actual content */}
  <Box sx={{ padding: 2, maxWidth: "1600px", margin: "0 auto" }}>
    {children}
  </Box>
</Box>

    </Box>
  );
}
