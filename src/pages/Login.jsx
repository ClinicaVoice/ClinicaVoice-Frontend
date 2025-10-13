// src/pages/Login.jsx
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      sessionStorage.setItem('clinica_token', 'demo-token');
      navigate('/dashboard');
    } else {
      setError('Please enter your email and password');
    }
  };

  return (
    <Box sx={{ backgroundColor: '#F9FAFB', minHeight: '100vh', py: 10 }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
          <Typography variant="h5" fontWeight={600} align="center" gutterBottom>
            Sign In to ClinicaVoice
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
            Welcome back! Please log in to continue.
          </Typography>

          <form onSubmit={handleSubmit}>
            {error && (
              <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>
                {error}
              </Typography>
            )}

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
                backgroundColor: '#C62828',
                '&:hover': { backgroundColor: '#a91e1e' },
              }}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
