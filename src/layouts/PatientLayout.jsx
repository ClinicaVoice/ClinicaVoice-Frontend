// src/layouts/PatientLayout.jsx
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
  Mic,
  Article,
  Message,
  Event,
  Settings,
  Logout,
  Menu as MenuIcon
} from "@mui/icons-material";

import DashboardHeader from "../components/DashboardHeader";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const drawerWidth = 230;

export default function PatientLayout({ children, active, onNavChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menu = [
    ["home", t("patient_nav_home"), <Dashboard />],
    ["results", t("patient_nav_results"), <Article />],
    ["messages", t("patient_nav_messages"), <Message />],
    ["appointments", t("patient_nav_appointments"), <Event />],
    ["settings", t("patient_nav_settings"), <Settings />]
  ];

  const drawer = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "#2E3A59",
        color: "white"
      }}
    >
      {/* Sidebar title */}
      <Typography
        variant="h6"
        align="center"
        sx={{ py: 3, fontWeight: 700 }}
      >
        Patient Panel
      </Typography>

      {/* Navigation items */}
      <List>
        {menu.map(([key, label, icon]) => (
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
            <ListItemIcon sx={{ color: "white" }}>
              {icon}
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>

      {/* Logout button */}
      <ListItemButton
        onClick={() => {
          sessionStorage.clear();
          navigate("/role-login");
        }}
        sx={{ color: "white", mt: "auto" }}
      >
        <ListItemIcon sx={{ color: "white" }}>
          <Logout />
        </ListItemIcon>
        <ListItemText primary={t("nav_logout")} />
      </ListItemButton>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* TOP HEADER BAR */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#2E3A59",
          zIndex: (theme) => theme.zIndex.drawer + 2
        }}
      >
        <Toolbar>
          {/* Mobile menu button */}
          <IconButton
            sx={{ display: { md: "none" } }}
            color="inherit"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR DESKTOP */}
      <Drawer
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
        open
      >
        {drawer}
      </Drawer>

      {/* SIDEBAR MOBILE */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* MAIN CONTENT SECTION */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: { md: `${drawerWidth}px` },
          mt: "60px" /** below top header */,
          p: 0.1,
          bgcolor: "#F9FAFB",
          minHeight: "100vh"
        }}
      >
        <DashboardHeader />

        <Box sx={{ mt: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
}
