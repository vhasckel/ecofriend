import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <LandingPage />
      {/* <Outlet /> */}
    </ThemeProvider>
  );
}

export default App;
