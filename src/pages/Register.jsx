// src/pages/Register.jsx
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.password) {
      sessionStorage.setItem('clinica_token', 'demo-token');
      navigate('/dashboard');
    }
  };

  return (
    <Box sx={{ backgroundColor: '#F9FAFB', minHeight: '100vh', py: 10 }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
          <Typography variant="h5" fontWeight={600} align="center" gutterBottom>
            Create Your Account
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
            Get started with ClinicaVoice today.
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              sx={{ mb: 3 }}
              required
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#26A69A',
                '&:hover': { backgroundColor: '#1d8379' },
              }}
            >
              Get Started
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
