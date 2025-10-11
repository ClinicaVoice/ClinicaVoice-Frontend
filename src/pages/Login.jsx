import React, { useState } from 'react'
import { Container, Typography, Box, TextField, Button, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/api'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await loginUser(form.email, form.password)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box sx={{ bgcolor: '#fff', p: 4, borderRadius: 2, boxShadow: 2 }}>
        <Typography variant="h5" gutterBottom>Sign In</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField fullWidth label="Email" name="email" value={form.email} onChange={handleChange} sx={{ mb: 2 }} required />
          <TextField fullWidth label="Password" name="password" type="password" value={form.password} onChange={handleChange} sx={{ mb: 2 }} required />
          <Button type="submit" variant="contained" color="secondary" fullWidth disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</Button>
        </Box>
      </Box>
    </Container>
  )
}
