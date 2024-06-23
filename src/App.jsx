import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import { ThemeProvider } from "@emotion/react";
import Hero from "./components/Hero/Hero";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      {/* <Outlet /> */}
    </ThemeProvider>
  );
}

export default App;
