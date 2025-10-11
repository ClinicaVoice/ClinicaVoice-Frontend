import React from 'react'
import { Container, Grid, Card, CardContent, Typography } from '@mui/material'

export default function About() {
  const team = [
    { name: 'John Austria', role: 'Project Manager' },
    { name: 'Omotola', role: 'Frontend Developer' },
    { name: 'Brian', role: 'AI Specialist' }
  ]
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>About ClinicaVoice</Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>ClinicaVoice streamlines clinical documentation for healthcare teams.</Typography>
      <Grid container spacing={3}>
        {team.map((p, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card sx={{ textAlign: 'center', py: 3 }}>
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography variant="body2" color="text.secondary">{p.role}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
