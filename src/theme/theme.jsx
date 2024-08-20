import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A6847",
    },
    secondary: {
      main: "#659b63",
    },
    customColors: {
      lightGreen: "#E7F0DC",
      cardGreen: "#c9e2bc",
      mediumGreen: "#ACD793",
      text: "#403f45",
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 20,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        menuButton: {
          color: "#E7F0DC",
          fontSize: "1rem",
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;
