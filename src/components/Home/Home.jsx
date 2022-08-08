import {
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
  Button,
  Link,
} from "@mui/material";
import Typewriter from "typewriter-effect";
import React from "react";
import { useEffect, useRef } from "react";
import "./Home.css";
import "../../App.css";
import Linkdin from "../../Pictures/Socials/Linkedin.png";
import Github from "../../Pictures/Socials/Github.png";

export default function Home() {
  return (
    <div className="container" id="home">
      <div className="introText">
        <Typography
          sx={{
            fontSize: { lg: "150px", md: "100px", sm: "75px", xs: "70px" },
          }}
          className="name"
          fontWeight="510"
        >
          {" "}
          Ishan Khosla.{" "}
        </Typography>{" "}
        <Typography
          className="text"
          sx={{ fontSize: { lg: "100px", md: "75px", sm: "60px", xs: "38px" } }}
          fontWeight="300"
        >
          <Typewriter
            options={{
              loop: true,
              strings: [
                "Full-Stack Developer.",
                "Programmer.",
                "Web Developer.",
              ],
              autoStart: true,
            }}
          />
        </Typography>
        <div className="home-about">
          <Typography
            sx={{
              fontSize: { lg: "30px", md: "20px", sm: "20px", xs: "20px" },
            }}
          >
            I am a full-stack developer based out of Toronto, ON, Canada.
          </Typography>
        </div>
        <div className="contactme-homepage">
          <Button
            sx={{ fontSize: 30, border: "2px solid black" }}
            variant="outlined"
            color="secondary"
            href="#contact"
          >
            Contact Me
          </Button>
        </div>
      </div>

      <div className="socials">
        <div className="Linkedin">
          <img src={Linkdin}></img>
          <Link
            sx={{ color: "secondary.main", textDecoration: "none" }}
            href="https://www.linkedin.com/in/ishan-khosla-9b2615186/"
          >
            <Typography
              sx={{
                fontSize: { lg: "30px", md: "20px", sm: "10px" },
                variant: { lg: "h3", md: "h4", sm: "h5" },
              }}
            >
              Linkedin
            </Typography>
          </Link>
        </div>
        <div className="Github">
          <img src={Github}></img>
          <Link
            sx={{ color: "secondary.main", textDecoration: "none" }}
            href="https://github.com/khos7990"
          >
            <Typography
              sx={{
                fontSize: { lg: "30px", md: "20px", sm: "10px" },
                variant: { lg: "h3", md: "h4", sm: "h5" },
              }}
            >
              Github
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}
