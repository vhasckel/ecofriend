import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#365E32",
    },
    secondary: {
      main: "#658147",
    },
    customColors: {
      lightGreen: "#E7F0DC",
      mediumGreen: "#BACD92",
    },
  },
  typography: {
    fontFamily: "Nunito",
  },
});

export default theme;
