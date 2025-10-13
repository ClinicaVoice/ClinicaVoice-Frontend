// src/pages/Home.jsx
import React from 'react';
import { Box, Button, Container, Typography, Grid, Paper } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#F9FAFB', minHeight: '100vh', color: '#000' }}>
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Welcome to ClinicaVoice
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Dictate. Transcribe. Care.
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 5 }}>
          AI-powered voice transcription designed to help healthcare professionals document efficiently, accurately, and securely.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" sx={{ backgroundColor: '#C62828', px: 4, '&:hover': { backgroundColor: '#a91e1e' } }}>
            Get Started
          </Button>
          <Button variant="outlined" sx={{ color: '#C62828', borderColor: '#C62828', px: 4, '&:hover': { backgroundColor: '#fff5f5' } }}>
            Learn More
          </Button>
        </Box>
      </Container>

      {/* WHY CLINICAVOICE */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight={600} align="center" gutterBottom>
          Why ClinicaVoice
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          {['Accuracy', 'Security', 'Efficiency'].map((title, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
                }}
              >
                <Typography variant="h6" fontWeight={600}>{title}</Typography>
                <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis.
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
