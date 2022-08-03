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
                <Link style={{textDecoration: 'none'}} to={'/'}><Typography variant="h3"sx={{fontSize: 35, letterSpacing: 2, textDecoration: 'none', color:"white"}}>Home</Typography> </Link>
                <Link style={{textDecoration: 'none'}} to={'/skills'}><Typography variant="h3" sx={{fontSize: 35, letterSpacing: 2, textDecoration: 'none', color:"white"}}>Skills</Typography></Link>
                <Link style={{textDecoration: 'none'}} to={'/projects'}><Typography variant="h3" sx={{fontSize: 35, letterSpacing: 2, textDecoration: 'none', color:"white"}}>Projects</Typography></Link>
                   </Toolbar>
            </AppBar>
        </div>
    )
}