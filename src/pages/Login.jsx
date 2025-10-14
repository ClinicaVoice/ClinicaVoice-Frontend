import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
//import logo from "../assets/logo.jpg";
import { useTranslation } from "react-i18next";

export default function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Mock authentication
    if (form.email === "admin@clinicavoice.ca" && form.password === "password123") {
      sessionStorage.setItem("clinica_token", "mock_token");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#F9FAFB", minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container maxWidth="sm">
        <Card elevation={4} sx={{ borderRadius: 3, overflow: "hidden" }}>
          <Grid container>
            {/* Left logo side (optional visual area) */}
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: "#2E3A59",
                display: "flex",
                justifyContent: "center",
                py: 3,
              }}
            >
              <Box
                component="img"
                src="/logo.jpeg"
                alt="ClinicaVoice logo"
                sx={{
                  height: 60,
                  width: "auto",
                  borderRadius: 1,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              />
            </Grid>

            {/* Form area */}
            <Grid item xs={12}>
              <CardContent sx={{ p: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Avatar sx={{ m: 1, bgcolor: "#C62828" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    {t("signin_title") || "Sign In"}
                  </Typography>

                  {error && (
                    <Alert severity="error" sx={{ mb: 2, width: "100%" }}>
                      {error}
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label={t("signin_email") || "Email Address"}
                      name="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label={t("signin_password") || "Password"}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={form.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        bgcolor: "#C62828",
                        "&:hover": { bgcolor: "#a32020" },
                        borderRadius: 2,
                        py: 1.4,
                        fontWeight: 600,
                        textTransform: "none",
                      }}
                    >
                      {t("signin_button") || "Sign In"}
                    </Button>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                      sx={{ mt: 2 }}
                    >
                      {t("signin_noaccount") || "Don’t have an account?"}{" "}
                      <Button
                        onClick={() => navigate("/register")}
                        sx={{
                          textTransform: "none",
                          color: "#26A69A",
                          fontWeight: 600,
                        }}
                      >
                        {t("signin_signup") || "Create one"}
                      </Button>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
