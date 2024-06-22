import { createTheme } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#628b35",
    },
    secondary: {
      main: "#103713",
    },
    customColors: {
      lightGreen: "#E1F0DA",
      mediumGreen: "#99BC85",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
