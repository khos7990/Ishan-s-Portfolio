import {
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
  Button,
  Link
} from "@mui/material";
import Typewriter from "typewriter-effect";
import React from "react";
import { useEffect, useRef } from "react";
import "./Home.css";
import photo from "../../photo.jpeg";
import Linkdin from "../../Pictures/Socials/Linkedin.png"
import Github from "../../Pictures/Socials/Github.png"

export default function Home() {
  return (
    <div className="container" id="home">
      <div className="introText">
        <Typography
          sx={{color: "#CCD1D1", mb: "50px" }}
          className="intro"
          variant="h1"
        >
          {" "}
          Hey! Thanks for stopping by!
        </Typography>
        <Typography sx={{ mb: "50px" }} className="text" variant="h1">
          {" "}
          My name is{" "}
          <Typography className="name" variant="h1" display="inline">
            {" "}
            Ishan Khosla{" "}
          </Typography>{" "}
        </Typography>
        <Typography className="text" variant="h1">
          <Typewriter
            options={{
              loop: true,
              strings: ["Programmer.", "Web Developer."],
              autoStart: true,
            }}
          />
        </Typography>
      </div>
      <div className="profileImg">
        <img className="photo" src={photo}></img>
      </div>
      <div className="socials">
            <div className="Linkedin">
              <img src={Linkdin}></img>
              <Link sx={{color: 'secondary.main'}} href="https://www.linkedin.com/in/ishan-khosla-9b2615186/"><Typography variant="h3">Linkedin</Typography></Link>
            </div>
            <div className="Github">
              <img src={Github}></img>
              <Link sx={{color: 'secondary.main'}} href="https://github.com/khos7990"><Typography variant="h3">Github</Typography></Link>
            </div>

      </div>

     
    </div>
  );
}
