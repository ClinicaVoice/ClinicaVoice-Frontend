import React, { useState } from 'react'
import { Container, Typography, Box, TextField, Button, Alert } from '@mui/material'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>Contact & Support</Typography>
      {sent ? <Alert severity="success">Thanks — your message has been received.</Alert> : (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
          <TextField fullWidth label="Name" name="name" value={form.name} onChange={handleChange} sx={{ mb: 2 }} required />
          <TextField fullWidth label="Email" name="email" type="email" value={form.email} onChange={handleChange} sx={{ mb: 2 }} required />
          <TextField fullWidth label="Message" name="message" multiline rows={4} value={form.message} onChange={handleChange} sx={{ mb: 2 }} required />
          <Button type="submit" variant="contained" color="secondary">Send Message</Button>
        </Box>
      )}
    </Container>
  )
}
