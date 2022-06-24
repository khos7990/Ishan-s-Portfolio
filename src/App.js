import {Route, Routes} from "react-router-dom";
import './App.css';
import About from "./components/about/about";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import React from 'react';
import Particles from './components/Particles/Particles';
import Nav from './components/Navbar/Navbar';




export default function App() {
  return (
    <div>
        <Particles/>
        <Nav/>
        <h1 className='title'>Welcome to Ishan's Portfolio</h1>
        <Routes>
          <Route path= "/about" element={<About />}/>
          <Route path= "/projects" elemment={<Projects />}/>
          <Route path= "/education" element={<Education />}/>
        </Routes>
    </div>
  )
}
