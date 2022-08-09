import {
  IconButton,
  ListItem,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-scroll";
import { useState } from "react";

export default function Drawer() {
  const [menuBar, setmenuBar] = useState(false);

  function onClick() {
    setmenuBar(!menuBar);
  }

  return (
    <div>
      <IconButton>
        <MenuIcon sx={{ color: "white", fontSize: 40 }} onClick={onClick} />
      </IconButton>
      <SwipeableDrawer anchor="left" open={menuBar}>
        <IconButton>
          <ChevronLeftIcon
            sx={{ fontSize: 60, color: "primary.main" }}
            onClick={onClick}
          />
        </IconButton>

        <Divider />
        <ListItem>
          <Link
            onClick={() => setmenuBar(false)}
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
              style={{ fontSize: 35, letterSpacing: 2, color: "#17202A" }}
            >
              Home
            </Typography>{" "}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            onClick={() => setmenuBar(false)}
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="navbar-link"
          >
            <Typography
              className="navtext"
              variant="h3"
              style={{ fontSize: 35, letterSpacing: 2, color: "#17202A" }}
            >
              About
            </Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            onClick={() => setmenuBar(false)}
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="navbar-link"
          >
            <Typography
              className="navtext"
              variant="h3"
              style={{ fontSize: 35, letterSpacing: 2, color: "#17202A" }}
            >
              Projects
            </Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            onClick={() => setmenuBar(false)}
            to="contact"
            spy={true}
            smooth={true}
            offset={80}
            duration={500}
            className="navbar-link"
          >
            <Typography
              className="navtext"
              variant="h3"
              style={{ fontSize: 35, letterSpacing: 2, color: "#17202A" }}
            >
              Contact Me
            </Typography>
          </Link>
        </ListItem>
      </SwipeableDrawer>
    </div>
  );
}
