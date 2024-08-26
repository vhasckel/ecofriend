import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
