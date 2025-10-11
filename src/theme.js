import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#2E3A59' }, // Soft Navy
    secondary: { main: '#C62828' }, // Maple Red
    background: { default: '#F9FAFB', paper: '#FFFFFF' },
    text: { primary: '#000000' },
    success: { main: '#26A69A' }
  },
  typography: {
    fontFamily: ['Poppins', 'Roboto', 'sans-serif'].join(','),
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 }
  },
  shape: { borderRadius: 12 },
})

export default theme
