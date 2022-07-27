import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './Navbar.css';


export default function Nav () {
    return (
        <div>
            <AppBar>
               <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}> 
                <Typography sx={{fontSize: '20px', wordSpacing: 10}} className="logo" variant="h3" >IK <EmailIcon fontSize="sm"/>i_shan-k@hotmail.com
                </Typography>
                <Typography variant="h3" component="a" href="/" sx={{fontSize: 35, letterSpacing: 2, textDecoration: 'none', color:"white"}}>Home</Typography>
                <Typography variant="h3" component="a" href="/education" sx={{fontSize: 35, letterSpacing: 2, textDecoration: 'none', color:"white"}}>Education</Typography>
                <Typography variant="h3" component="a" href="/projects" sx={{fontSize: 35, letterSpacing: 2, textDecoration: 'none', color:"white"}}>Projects</Typography>
                   </Toolbar>
            </AppBar>
        </div>
    )
}