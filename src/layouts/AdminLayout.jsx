// src/layouts/AdminLayout.jsx
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography
} from "@mui/material";

import {
  Dashboard,
  People,
  Article,
  BarChart,
  Settings,
  Menu as MenuIcon,
  Logout
} from "@mui/icons-material";

import DashboardHeader from "../components/DashboardHeader";   // <-- REQUIRED
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const drawerWidth = 230;

export default function AdminLayout({ children, active, onNavChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const drawer = (
    <Box sx={{ height: "100%", bgcolor: "#2E3A59", color: "white" }}>
      <Typography variant="h6" align="center" sx={{ py: 3 }}>
        Admin Panel
      </Typography>

      <List>
        {[
          ["overview", t("admin_overview"), <Dashboard />],
          ["users", t("admin_users"), <People />],
          ["reports", t("admin_reports"), <Article />],
          ["analytics", t("admin_analytics"), <BarChart />],
          ["settings", t("admin_settings"), <Settings />]
        ].map(([key, label, icon]) => (
          <ListItemButton
            key={key}
            selected={active === key}
            onClick={() => onNavChange(key)}
            sx={{
              "&.Mui-selected": {
                bgcolor: "#26A69A",
                mx: 1,
                borderRadius: 1
              }
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>

      <ListItemButton
        sx={{ color: "white", mt: "auto" }}
        onClick={() => {
          sessionStorage.clear();
          navigate("/role-login");
        }}
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
      {/* Top bar */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#2E3A59",
          zIndex: (theme) => theme.zIndex.drawer + 2
        }}
      >
        <Toolbar>
          <IconButton
            sx={{ display: { md: "none" } }}
            onClick={() => setMobileOpen(true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        open
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#2E3A59",
            color: "white",
            borderRight: "none"
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: { md: `${drawerWidth}px` },
          mt: "64px"
        }}
      >
        <DashboardHeader />

        <Box sx={{ p: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
}
