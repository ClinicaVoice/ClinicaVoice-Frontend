import React, { useEffect, useState } from 'react'
import { Container, Grid, Card, CardContent, Typography, Paper, Box } from '@mui/material'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { getDashboardStats, getTranscriptions } from '../services/api'

const activity = [
  { date: '2025-09-01', transcriptions: 5 },
  { date: '2025-09-05', transcriptions: 12 },
  { date: '2025-09-10', transcriptions: 7 },
  { date: '2025-09-15', transcriptions: 20 },
  { date: '2025-09-20', transcriptions: 15 },
  { date: '2025-09-25', transcriptions: 22 },
  { date: '2025-09-30', transcriptions: 18 },
]

export default function Dashboard() {
  const [stats, setStats] = useState(null)
  const [trans, setTrans] = useState([])

  useEffect(() => {
    async function fetchData(){
      const s = await getDashboardStats()
      const t = await getTranscriptions()
      setStats(s); setTrans(t)
    }
    fetchData()
  }, [])

  if (!stats) return <Container sx={{ py: 8 }}>Loading...</Container>

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}><Card><CardContent><Typography color="text.secondary">Active Patients</Typography><Typography variant="h5">{stats.activePatients}</Typography></CardContent></Card></Grid>
        <Grid item xs={12} md={4}><Card><CardContent><Typography color="text.secondary">Recent Transcriptions</Typography><Typography variant="h5">{stats.recentTranscriptions}</Typography></CardContent></Card></Grid>
        <Grid item xs={12} md={4}><Card><CardContent><Typography color="text.secondary">Pending Reviews</Typography><Typography variant="h5">{stats.pendingReviews}</Typography></CardContent></Card></Grid>
      </Grid>

      <Paper sx={{ mt: 6, p: 3 }}>
        <Typography variant="h6" gutterBottom>Activity (Last 30 days)</Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={activity}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="transcriptions" stroke="#26A69A" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      <Paper sx={{ mt: 4, p: 3 }}>
        <Typography variant="h6" gutterBottom>Recent Notes</Typography>
        {trans.map(t => <Typography key={t.id}>{t.patient} — {t.date} — {t.status}</Typography>)}
      </Paper>
    </Container>
  )
}
