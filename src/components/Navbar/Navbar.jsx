import {
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-scroll";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DrawerComponent from "../Drawer/Drawer";
import "./Navbar.css";

export default function Nav() {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.down("navbar"));

  return (
    <div>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ fontSize: "20px", wordSpacing: 10 }}
            className="logo"
            variant="h3"
          >
            IK <EmailIcon fontSize="sm" />
            i_shan-k@hotmail.com
          </Typography>
          {screenSize ? (
            <DrawerComponent />
          ) : (
            <>
              <Link
                sx={{ display: { sm: "none" } }}
                to="home"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className="navbar-link"
              >
                <Typography
                  className="navtext"
                  variant="h3"
                  style={{ fontSize: 35, letterSpacing: 2, color: "white" }}
                >
                  Home
                </Typography>{" "}
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={25}
                duration={500}
                className="navbar-link"
              >
                <Typography
                  className="navtext"
                  variant="h3"
                  style={{ fontSize: 35, letterSpacing: 2, color: "white" }}
                >
                  About
                </Typography>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-25}
                duration={500}
                className="navbar-link"
              >
                <Typography
                  className="navtext"
                  variant="h3"
                  style={{ fontSize: 35, letterSpacing: 2, color: "white" }}
                >
                  Projects
                </Typography>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navbar-link"
              >
                <Typography
                  className="navtext"
                  variant="h3"
                  style={{ fontSize: 35, letterSpacing: 2, color: "white" }}
                >
                  Contact Me
                </Typography>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
