// src/theme.js
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#2E3A59' }, // Soft Navy
    secondary: { main: '#C62828' }, // Maple Red
    background: { default: '#F9FAFB', paper: '#FFFFFF' }, // Off White
    text: { primary: '#000000' },
    success: { main: '#26A69A' } // Sea Green
  },
  typography: {
    fontFamily: ['Poppins', 'Roboto', 'sans-serif'].join(','),
    h3: { fontWeight: 800 },
    h4: { fontWeight: 600 }
  },
  shape: { borderRadius: 12 }
});

export default theme;

