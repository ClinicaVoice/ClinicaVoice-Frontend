// src/pages/About.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';

const team = [
  { name: 'John Austria', role: 'Project Manager' },
  { name: 'Phoebe', role: 'Frontend Developer' },
  { name: 'Brian', role: 'AI Specialist' },
  { name: 'Chinedu', role: 'Backend Developer' },
  { name: 'Onyebuchi', role: 'DevOps Engineer' },
  { name: 'Amaka', role: 'QA & Documentation' },
];

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#F9FAFB', color: '#000', minHeight: '100vh' }}>
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
          About ClinicaVoice
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>
          Empowering healthcare professionals through intelligent transcription and workflow tools.
        </Typography>

        {/* Team Section */}
        <Typography variant="h5" fontWeight={600} align="center" sx={{ mb: 3 }}>
          Meet the Team
        </Typography>
        <Grid container spacing={3}>
          {team.map((member, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  borderRadius: 3,
                  transition: 'all 0.3s',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
                }}
              >
                <Avatar sx={{ bgcolor: '#2E3A59', mx: 'auto', width: 64, height: 64, mb: 2 }}>
                  {member.name[0]}
                </Avatar>
                <Typography fontWeight={600}>{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Faculty Advisor */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6" fontWeight={600}>Professor Vinnie</Typography>
          <Typography variant="body2" color="text.secondary">Faculty Advisor</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
