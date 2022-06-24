import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import './Navbar.css';


export default function Nav () {
    return (
        <div>
            <AppBar>
               <Toolbar className="toolbar"> 
                   <h3><Link to="/">Home</Link></h3> 
                   <h3><Link to= "/about">About Me</Link></h3>
                   <h3><Link to="/education">Education</Link></h3>
                   <h3><Link to="/projects">Projects</Link></h3>
                   </Toolbar>
            </AppBar>
        </div>
    )
}