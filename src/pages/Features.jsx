import React from 'react'
import { Container, Grid, Card, CardContent, Typography } from '@mui/material'

export default function Features() {
  const items = [
    { title: 'Voice Capture', desc: 'Real-time and batch transcription with timestamps.' },
    { title: 'Template Builder', desc: 'Create SOAP/HPI templates for faster documentation.' },
    { title: 'Analytics Dashboard', desc: 'Usage metrics and exportable reports.' }
  ]
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>Features</Typography>
      <Grid container spacing={3}>
        {items.map((it, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card><CardContent><Typography variant="h6">{it.title}</Typography><Typography variant="body2">{it.desc}</Typography></CardContent></Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
