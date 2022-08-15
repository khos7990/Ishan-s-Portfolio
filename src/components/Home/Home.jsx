import {
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import Typewriter from "typewriter-effect";
import React from "react";
import { useEffect, useRef } from "react";
import "./Home.css";
import "../../App.css";
import Linkedin from "../../Pictures/Socials/Linkedin.png";
import Github from "../../Pictures/Socials/Github.png";

export default function Home() {
  return (
    <div className="container" id="home">
      <div className="introText">
        <Typography
          sx={{
            fontSize: {
              desktop: "150px",
              laptop: "100px",
              tablet: "75px",
              mobile: "70px",
            },
            fontWeight: {
              desktop: "510",
              laptop: "510",
              tablet: "510",
              mobile: "510",
            },
          }}
          className="name"
        >
          {" "}
          Ishan Khosla.{" "}
        </Typography>{" "}
        <Typography
          className="text"
          sx={{
            fontSize: {
              desktop: "100px",
              laptop: "50px",
              tablet: "60px",
              mobile: "33px",
            },
          }}
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
              fontSize: {
                desktop: "30px",
                laptop: "20px",
                tablet: "20px",
                mobile: "20px",
              },
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
            <IconButton href="https://www.linkedin.com/in/ishan-khosla-9b2615186/">
          <img className="LinkedinImg" src={Linkedin}></img>
            </IconButton>
        </div>
        <div className="Github">
        <IconButton href="https://github.com/khos7990">
          <img className="GithubImg" src={Github}></img>
            </IconButton>
        </div>
      </div>

    </div>
  );
}
