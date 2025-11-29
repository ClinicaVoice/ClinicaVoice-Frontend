// src/layouts/RoleLayout.jsx
import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

const drawerWidth = 220;

export function RoleLayout({ role, activeNav, onNavChange, children }) {
  const { i18n, t } = useTranslation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const navItems = [
    { id: "dashboard", icon: <DashboardIcon />, label: t("nav_dashboard") },
    { id: "patients", icon: <PeopleIcon />, label: t("nav_patients") },
    {
      id: "upload",
      icon: <LibraryMusicIcon />,
      label:
        role === "doctor"
          ? t("nav_upload_audio")
          : role === "patient"
          ? t("nav_my_uploads")
          : t("nav_uploads"),
    },
    { id: "reports", icon: <DescriptionIcon />, label: t("nav_reports") },
    { id: "settings", icon: <SettingsIcon />, label: t("nav_settings") },
  ];

  const roleLabelMap = {
    admin: t("role_admin") || "Admin",
    doctor: t("role_doctor") || "Doctor",
    patient: t("role_patient") || "Patient",
  };

  const drawer = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Toolbar sx={{ px: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          ClinicaVoice
        </Typography>
      </Toolbar>
      <Divider />
      <Box sx={{ px: 2, py: 1 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textTransform: "uppercase", letterSpacing: 0.5 }}
        >
          {t("nav_role")} {roleLabelMap[role] || role}
        </Typography>
      </Box>
      <List sx={{ flex: 1 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.id}
            selected={activeNav === item.id}
            onClick={() => onNavChange && onNavChange(item.id)}
            sx={{ borderRadius: 1, mx: 1, mb: 0.5 }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      {/* App bar inside role area */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {roleLabelMap[role]} {t("nav_portal")}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              size="small"
              sx={{
                borderRadius: 1,
                px: 1.5,
                border:
                  i18n.language === "en"
                    ? "1px solid #fff"
                    : "1px solid transparent",
                color: "#fff",
              }}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </IconButton>
            <IconButton
              size="small"
              sx={{
                borderRadius: 1,
                px: 1.5,
                border:
                  i18n.language === "fr"
                    ? "1px solid #fff"
                    : "1px solid transparent",
                color: "#fff",
              }}
              onClick={() => i18n.changeLanguage("fr")}
            >
              FR
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              borderRight: "1px solid #e0e0e0",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
