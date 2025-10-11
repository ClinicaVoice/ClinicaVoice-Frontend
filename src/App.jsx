import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material'
import Home from './pages/Home'
import Features from './pages/Features'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function Header() {
  const loggedIn = !!sessionStorage.getItem('clinica_token')
  const handleLogout = () => { sessionStorage.clear(); window.location.href = '/' }
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" component={Link} to="/" sx={{ color: '#fff' }}>ClinicaVoice</Typography>
        </Box>
        <Box>
          <Button color="inherit" component={Link} to="/features">Product</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          {loggedIn ? (
            <>
              <Button color="inherit" component={Link} to="/dashboard" sx={{ bgcolor: '#C62828', color: '#fff', '&:hover': { bgcolor: '#a32020' }, ml: 1 }}>Dashboard</Button>
              <Button color="inherit" onClick={handleLogout} sx={{ ml: 1 }}>Log out</Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">Sign In</Button>
              <Button color="secondary" variant="contained" component={Link} to="/register" sx={{ ml: 1 }}>Get Started</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

function Footer() {
  return (
    <Box sx={{ bgcolor: '#2E3A59', color: '#fff', py: 2, mt: 6 }}>
      <Container>
        <Typography variant="body2" align="center">© 2025 ClinicaVoice | CodeBlue Innovators</Typography>
      </Container>
    </Box>
  )
}

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={ sessionStorage.getItem('clinica_token') ? <Dashboard /> : <Navigate to="/login" /> } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}
