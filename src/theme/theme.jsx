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
      mediumGreen: "#ACD793",
      text: "#403f45",
    },
  },
  typography: {
    fontFamily: "Nunito",
  },
  shape: {
    borderRadius: 20,
  },
});

export default theme;
