import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#2E3A59" }, // soft navy
    secondary: { main: "#26A69A" }, // sea green
    error: { main: "#C62828" }, // maple red
    background: { default: "#F9FAFB", paper: "#ffffff" },
    text: { primary: "#000000" },
    success: {
      main: "#26A69A", // sea green accent
    },
  },
  typography: {
    fontFamily: ["Poppins", "Roboto",'Helvetica', 'Arial', "sans-serif"].join(","),
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: "0 4px 16px rgba(15,23,42,0.08)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#2E3A59",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
        containedSecondary: {
          boxShadow: "0 4px 10px rgba(198,40,40,0.35)",
        },
      },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
},
});

export default theme;
