import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './Navbar.css';


export default function Nav () {
    return (
        <div>
            <AppBar>
               <Toolbar className="toolbar"> 
                <Typography variant="h3" ><Link to="/">Home</Link></Typography>
                <Typography variant="h3"><Link to="/education">Education</Link></Typography>
                <Typography variant="h3"><Link to="/projects">Projects</Link></Typography>
                   </Toolbar>
            </AppBar>
        </div>
    )
}