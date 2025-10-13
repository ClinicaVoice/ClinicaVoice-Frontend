import React from 'react'
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'

export default function About() {
  const team = [
    { name: 'John Austria', role: 'Project Manager' },
    { name: 'Phoebe', role: 'Frontend Developer' },
    { name: 'Brian', role: 'AI Specialist' },
    { name: 'Chinedu', role: 'Backend Developer' },
    { name: 'Onyebuchi', role: 'DevOps' },
    { name: 'Amaka', role: 'QA' },
  ]
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>About ClinicaVoice</Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>ClinicaVoice streamlines clinical documentation for healthcare teams.</Typography>
      {/* <Typography variant ="h3" gutterBottom>Meet The Team</Typography> */}
      <Grid container spacing={2}>
        {team.map((p, i) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={i}>
            <Card sx={{ textAlign: 'center', py: 6 }}>
              <CardMedia
                component="img" // Specifies that the component is an image
                height="120" // Sets the height of the image
                image="/path/to/your/image.jpg" // Provides the path to your image
                alt="Team Member image" // Important for accessibility
              />
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
