import {Route, Routes} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './App.css';
import About from "./components/about/about";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Home from "./components/Home/Home";
import React from 'react';
import Particles from './components/Particles/Particles';
import Nav from './components/Navbar/Navbar';


const theme = createTheme({
  palette: {
    primary: {
      main: '#17202A',
      darker: '#053e85',
    },
  },
});

export default function App() {
  return (
    <div>
      <Particles/>
      <ThemeProvider theme={theme}>
        <Nav/>
        <Routes>
          <Route path= "/about" element={<About />}/>
          <Route path= "/projects" elemment={<Projects />}/>
          <Route path= "/education" element={<Education />}/>
        </Routes>
        <Home/>
        </ThemeProvider>
    </div>
  )
}
