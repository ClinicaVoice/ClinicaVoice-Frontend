import React from 'react'
import { Container, Typography, Stack, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Box sx={{ bgcolor: '#F9FAFB', minHeight: 'calc(100vh - 128px)', py: 12 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ color: '#000' }}>Welcome to ClinicaVoice</Typography>
        <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 6 }}>
          AI-powered voice transcription designed to help healthcare professionals document efficiently, accurately, and securely.
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Button component={Link} to="/register" variant="contained" sx={{ bgcolor: '#C62828', '&:hover': { bgcolor: '#a32020' }, px: 4, py: 1.5 }}>Get Started</Button>
          <Button component={Link} to="/features" variant="outlined" sx={{ color: '#C62828', borderColor: '#C62828', px: 4, py: 1.5 }}>Learn More</Button>
        </Stack>
      </Container>
    </Box>
  )
}
