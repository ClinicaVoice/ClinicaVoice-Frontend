import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  MenuItem,
  Select
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const loggedIn = !!sessionStorage.getItem("clinica_token");
  const currentRole = sessionStorage.getItem("clinica_role");

  const handleLogout = () => {
    sessionStorage.removeItem("clinica_token");
    sessionStorage.removeItem("clinica_role");
    navigate("/");
  };

  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{
        height: 64,
        justifyContent: "center",
        bgcolor: "#2E3A59"
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          <Box
            component="img"
            src="/logo.jpeg"
            alt="ClinicaVoice logo"
            sx={{
              width: 40,
              height: 40,
              borderRadius: 1,
              objectFit: "contain",
              mr: 1.5,
              boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
              transition: "transform .2s, box-shadow .2s",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.18)"
              }
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            ClinicaVoice
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <Button component={Link} to="/" color="inherit">
            {t("nav_home")}
          </Button>
          <Button component={Link} to="/about" color="inherit">
            {t("nav_about")}
          </Button>
          <Button component={Link} to="/contact" color="inherit">
            {t("nav_contact")}
          </Button>

          {loggedIn ? (
            <>
              <Button
                component={Link}
                to={
                  !loggedIn
                    ? "/role-login"
                    : currentRole === "admin"
                    ? "/admin"
                    : currentRole === "doctor"
                    ? "/doctor"
                    : currentRole === "patient"
                    ? "/patient"
                    : "/role-login" // 🔥 FIXED FALLBACK
                }
                variant="contained"
                sx={{
                  bgcolor: "#26A69A",
                  "&:hover": { bgcolor: "#1E8C82" }
                }}
              >
                {t("nav_getstarted")}
              </Button>

              <Button onClick={handleLogout} sx={{ ml: 1 }} color="inherit">
                {t("nav_logout")}
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                sx={{
                  bgcolor: "#26A69A",
                  "&:hover": { bgcolor: "#1d8777" }
                }}
              >
                {t("nav_getstarted")}
              </Button>

              <Button
                component={Link}
                to="/role-login"
                variant="contained"
                sx={{
                  bgcolor: "#C62828",
                  ml: 1,
                  "&:hover": { bgcolor: "#A32020" }
                }}
              >
                {t("nav_signin")}
              </Button>
            </>
          )}

          <Select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            size="small"
            sx={{
              ml: 1,
              color: "#fff",
              ".MuiSelect-icon": { color: "#fff" },
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              minWidth: 88
            }}
          >
            <MenuItem value="en">EN 🇬🇧</MenuItem>
            <MenuItem value="fr">FR 🇫🇷</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
