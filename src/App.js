import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import React from "react";
import Particles from "./components/Particles/Particles";
import Nav from "./components/Navbar/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#17202A",
      darker: "#053e85",
    },
    secondary: {
      main: "#000000",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      navbar: 850,
      resume: 1000,
      laptop: 1350,
      desktop: 1400
    }
  }
});

export default function App() {
  return (
    <div className="app-container">
      <Particles />
      <ThemeProvider theme={theme}>
        <Nav />
        <Home />
        <About />
        <Projects />
        <Contact />
      </ThemeProvider>
    </div>
  );
}
