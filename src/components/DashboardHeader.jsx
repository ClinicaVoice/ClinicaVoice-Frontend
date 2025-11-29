import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

export default function DashboardHeader() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const role = sessionStorage.getItem("clinica_role") || "User";

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#2E3A59", // ClinicaVoice Navy
        height: 64,
        justifyContent: "center",
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT SECTION — LOGO + ROLE */}
        <Box display="flex" alignItems="center">
          <Box
            component="img"
            src="/logo.jpeg"
            alt="ClinicaVoice Logo"
            sx={{
              width: 38,
              height: 38,
              borderRadius: 1,
              mr: 1.5,
              boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
            }}
          />

          <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
            ClinicaVoice — {role.charAt(0).toUpperCase() + role.slice(1)}
          </Typography>
        </Box>

        {/* RIGHT SECTION — ICONS */}
        <Box display="flex" alignItems="center" gap={1.5}>
          {/* Notifications */}
          <Tooltip title="Notifications">
            <IconButton sx={{ color: "white" }}>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Settings */}
          <Tooltip title="Settings">
            <IconButton sx={{ color: "white" }}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>

          {/* Avatar */}
          <Tooltip title="Account">
            <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
              <Avatar
                sx={{
                  bgcolor: "#26A69A",
                  width: 36,
                  height: 36,
                  fontSize: "0.9rem",
                }}
              >
                {role.charAt(0).toUpperCase()}
              </Avatar>
            </IconButton>
          </Tooltip>

          {/* Avatar Dropdown Menu */}
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                navigate("/" + role);
              }}
            >
              Dashboard
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleMenuClose();
                sessionStorage.clear();
                navigate("/");
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
