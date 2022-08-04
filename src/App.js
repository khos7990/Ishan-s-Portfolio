import {Route, Routes} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './App.css';
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
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
    secondary: {
      main: 'rgb(233, 158, 18)'
    }
  },
});

export default function App() {
  return (
    <div>
      <Particles/>
      <ThemeProvider theme={theme}>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path= "/about" element={<About/>}/>
          <Route path= "/projects" element={<Projects />}/>
          <Route path= "/contact" element={<Contact/>}/>
        </Routes>
        </ThemeProvider>
    </div>
  )
}
