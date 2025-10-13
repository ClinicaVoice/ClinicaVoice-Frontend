// src/pages/Dashboard.jsx
import React from 'react';
import { Box, Container, Grid, Paper, Typography, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { date: 'Oct 1', value: 10 },
  { date: 'Oct 5', value: 25 },
  { date: 'Oct 10', value: 18 },
  { date: 'Oct 15', value: 32 },
  { date: 'Oct 20', value: 20 },
  { date: 'Oct 25', value: 28 },
];

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: '#F9FAFB', minHeight: '100vh', py: 8 }}>
      <Container>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
          Dashboard Overview
        </Typography>

        <Grid container spacing={3} sx={{ mb: 5 }}>
          {[
            { title: 'Active Patients', value: 124 },
            { title: 'Recent Transcriptions', value: 32 },
            { title: 'Pending Reviews', value: 6 },
          ].map((stat, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper sx={{ p: 3, borderRadius: 3, textAlign: 'center', boxShadow: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  {stat.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper sx={{ p: 3, borderRadius: 3, mb: 5 }}>
          <Typography fontWeight={600} sx={{ mb: 2 }}>
            Activity Trend
          </Typography>
          <Box sx={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={mockData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#26A69A"
                  strokeWidth={3}
                  dot={{ fill: '#C62828' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Paper>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography fontWeight={600} sx={{ mb: 2 }}>
                Recent Notes
              </Typography>
              {['Dr. John - SOAP Note', 'Dr. Omotola - HPI Report', 'Dr. Brian - AI Draft'].map(
                (item, i) => (
                  <Typography key={i} variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                    • {item}
                  </Typography>
                )
              )}
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography fontWeight={600} sx={{ mb: 2 }}>
                Quick Actions
              </Typography>
              <Button
                fullWidth
                variant="contained"
                sx={{ mb: 1, backgroundColor: '#C62828', '&:hover': { backgroundColor: '#a91e1e' } }}
              >
                New Transcription
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{ mb: 1, borderColor: '#2E3A59', color: '#2E3A59' }}
              >
                Upload Audio
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{ borderColor: '#26A69A', color: '#26A69A' }}
              >
                Export Report
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
