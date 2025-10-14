import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#2E3A59", color: "#fff", mt: 6 }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Product</Typography>
            <Typography variant="body2">Transcription • Templates • Integrations</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Company</Typography>
            <Typography variant="body2">About • Careers • Contact</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Support</Typography>
            <Typography variant="body2">Help Center • Privacy • Terms</Typography>
          </Grid>
        </Grid>
        <Typography variant="caption" display="block" align="center" sx={{ mt: 3, opacity: 0.85 }}>
          Built with care for Canadian healthcare — accessibility and privacy prioritized.
        </Typography>
      </Container>
    </Box>
  );
}
