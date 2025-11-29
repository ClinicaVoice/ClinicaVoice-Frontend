import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("doctor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const token = "demo-jwt-token";

    sessionStorage.setItem("clinica_token", token);
    sessionStorage.setItem(
      "clinica_user",
      JSON.stringify({ email, role })
    );

    navigate(`/${role}`);
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }} elevation={4}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          ClinicaVoice Login
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            id="email"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            id="role"
            label="Role"
            select
            fullWidth
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="doctor">Doctor</MenuItem>
            <MenuItem value="patient">Patient</MenuItem>
          </TextField>

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
