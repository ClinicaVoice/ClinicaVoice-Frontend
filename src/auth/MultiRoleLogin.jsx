// src/auth/MultiRoleLogin.jsx
import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MultiRoleLogin() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("doctor");

  const handleLogin = () => {
    sessionStorage.setItem("clinica_token", "clinica_temp_token");
    sessionStorage.setItem("clinica_role", role);

    navigate(`/${role}`, { replace: true });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        bgcolor: "#F9FAFB", // Off-white background
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: 430,
          p: 4,
          borderRadius: "20px",
          textAlign: "center",
          background: "#ffffff",
          boxShadow:
            "0 8px 20px rgba(46, 58, 89, 0.12), 0 2px 6px rgba(46, 58, 89, 0.08)",
        }}
      >
        {/* Brand */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#2E3A59",
              fontSize: "1.6rem",
            }}
          >
            ClinicaVoice
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              color: "#6B7280",
              mt: 0.5,
              fontSize: "0.95rem",
              letterSpacing: 0.2,
            }}
          >
            {t("role_login_title") || "Multi-Role Login"}
          </Typography>
        </Box>

        {/* Email */}
        <TextField
          id="multi-email"
          label={t("email") || "Email"}
          fullWidth
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            sx: { borderRadius: "12px" },
          }}
        />

        {/* Password */}
        <TextField
          id="multi-password"
          label={t("password") || "Password"}
          type="password"
          fullWidth
          sx={{ mb: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            sx: { borderRadius: "12px" },
          }}
        />

        {/* Role dropdown */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="multi-role-label">
            {t("role") || "Role"}
          </InputLabel>
          <Select
            labelId="multi-role-label"
            id="multi-role"
            label={t("role") || "Role"}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            sx={{ borderRadius: "12px" }}
          >
            <MenuItem value="admin">{t("role_admin") || "Admin"}</MenuItem>
            <MenuItem value="doctor">{t("role_doctor") || "Doctor"}</MenuItem>
            <MenuItem value="patient">{t("role_patient") || "Patient"}</MenuItem>
          </Select>
        </FormControl>

        {/* Login button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            py: 1.4,
            mt: 1,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
            letterSpacing: 0.4,
            fontSize: "1rem",
            backgroundColor: "#2E3A59",
            "&:hover": {
              backgroundColor: "#26324C",
            },
          }}
        >
          {t("login") || "Login"}
        </Button>

        {/* Additional links */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="caption" sx={{ color: "#6B7280" }}>
            {t("no_account") || "Don’t have an account?"}
          </Typography>

          <Button
            component="a"
            href="/register"
            sx={{
              ml: 1,
              fontSize: "0.8rem",
              textTransform: "none",
              color: "#26A69A",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {t("register_here") || "Register"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
