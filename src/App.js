import {Route, Routes} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './App.css';
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
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
          <Route path= "/skills" element={<Skills/>}/>
          <Route path= "/projects" element={<Projects />}/>
        </Routes>
        </ThemeProvider>
    </div>
  )
}
