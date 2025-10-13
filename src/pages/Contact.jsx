// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <Box sx={{ backgroundColor: '#F9FAFB', minHeight: '100vh', py: 10 }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
          <Typography variant="h5" fontWeight={600} align="center" gutterBottom>
            Contact Us
          </Typography>
          {sent ? (
            <Typography align="center" sx={{ color: '#26A69A' }}>
              ✅ Thank you! We’ve received your message.
            </Typography>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <TextField fullWidth label="Full Name" variant="outlined" sx={{ mb: 2 }} required />
              <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} required />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                sx={{ mb: 3 }}
                required
              />
              <Button fullWidth type="submit" variant="contained" sx={{ backgroundColor: '#C62828' }}>
                Send Message
              </Button>
            </form>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
