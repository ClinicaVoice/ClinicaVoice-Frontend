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
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useNavigate } from "react-router-dom";
//import logo from "../assets/logo.jpeg";
import { useTranslation } from "react-i18next";

export default function Register() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }

    // Mock successful registration
    sessionStorage.setItem("clinica_token", "mock_token");
    setSuccess(true);
    setTimeout(() => navigate("/dashboard"), 1200);
  };

  return (
    <Box sx={{ backgroundColor: "#F9FAFB", minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container maxWidth="sm">
        <Card elevation={4} sx={{ borderRadius: 3, overflow: "hidden" }}>
          <Grid container>
            {/* Header logo */}
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

            {/* Form */}
            <Grid item xs={12}>
              <CardContent sx={{ p: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Avatar sx={{ m: 1, bgcolor: "#26A69A" }}>
                    <PersonAddAlt1Icon />
                  </Avatar>
                  <Typography component="h1" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    {t("register_title") || "Create an Account"}
                  </Typography>

                  {error && (
                    <Alert severity="error" sx={{ mb: 2, width: "100%" }}>
                      {error}
                    </Alert>
                  )}

                  {success && (
                    <Alert severity="success" sx={{ mb: 2, width: "100%" }}>
                      {t("register_success") || "Account created successfully! Redirecting..."}
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label={t("register_name") || "Full Name"}
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label={t("register_email") || "Email Address"}
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
                      label={t("register_password") || "Password"}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={form.password}
                      onChange={handleChange}
                      autoComplete="new-password"
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
                        bgcolor: "#26A69A",
                        "&:hover": { bgcolor: "#1f8c82" },
                        borderRadius: 2,
                        py: 1.4,
                        fontWeight: 600,
                        textTransform: "none",
                      }}
                    >
                      {t("register_button") || "Sign Up"}
                    </Button>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                      sx={{ mt: 2 }}
                    >
                      {t("register_haveaccount") || "Already have an account?"}{" "}
                      <Button
                        onClick={() => navigate("/login")}
                        sx={{
                          textTransform: "none",
                          color: "#C62828",
                          fontWeight: 600,
                        }}
                      >
                        {t("register_signin") || "Sign In"}
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
