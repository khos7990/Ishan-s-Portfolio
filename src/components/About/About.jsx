import { Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Resume from "../../Resume/Resume.pdf";
import ResumeScreenshot from "../../Resume/Resume-screenshot.png";
import photo from "../../photo.png";
import "./About.css";

export default function Education() {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.down("md"));
  const icons = [
    require("../../Pictures/Skills/HTML.png"),
    require("../../Pictures/Skills/CSS.png"),
    require("../../Pictures/Skills/JS.png"),
    require("../../Pictures/Skills/Node.png"),
    require("../../Pictures/Skills/React.png"),
    require("../../Pictures/Skills/Mongo.png"),
    require("../../Pictures/Skills/Python.png"),
    require("../../Pictures/Skills/Django.png"),
    require("../../Pictures/Skills/Postgresql.png"),
    require("../../Pictures/Skills/AWS.png"),
    require("../../Pictures/Skills/JWT.png"),
    require("../../Pictures/Skills/Git.png"),
  ];

  const displayIcons = icons.map((icon) => (
    <div className="icon">
      <img className="icon-image" src={icon}></img>
    </div>
  ));
  return (
    <div className="skill-container" id="about">
      <div className="about">
        <div className="profileImg">
          <img className="photo" src={photo}></img>
        </div>
        <Typography
          variant="h4"
          className="text"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          About Me
        </Typography>
        <Typography
          className="text aboutme-text"
          sx={{
            fontSize: { lg: "30px", md: "20px", sm: "20px", xs: "20px" },
            wordSpacing: { lg: 10, md: 5, sm: 5, xs: 5 },
          }}
          variant="h5"
        >
          Hey, my name is Ishan and i'm happy you've came to visit my site. I am
          doing what I enjoy which is creating projects, and solving challenges.
        </Typography>
      </div>
      <div className="technologies">
        <div className="title">
          <Typography
            sx={{
              fontSize: { lg: "50px", md: "50px", sm: "60px", xs: "40px" },
              variant: { lg: "h1", md: "h1", sm: "h2", xs: "h2" },
            }}
            color="secondary.main"
          >
            My Skills
          </Typography>
        </div>

        <div className="icon-container"> {displayIcons} </div>
      </div>

      <div className="resume-container">
        {screenSize ? (
          <a href={Resume} download={Resume}>
            <Button
              className="resumeBtn"
              sx={{
                mt: "20px",
                fontSize: "20px",
                color: "secondary.main",
                position: "absolute",
                width: "60vw",
                border: "2px solid #000000",
                left: "20%",
              }}
              variant="outlined"
            >
              Click Here to download Resume
            </Button>
          </a>
        ) : (
          <>
            <Typography
              variant="h3"
              color="secondary.main"
              sx={{ textAlign: "center" }}
            >
              My Resume
            </Typography>
            <div className="resume">
              <img className="resumepic" src={ResumeScreenshot}></img>
            </div>
            <a href={Resume} download={Resume}>
              <Button
                sx={{
                  fontSize: 48,
                  color: "secondary.main",
                  position: "absolute",
                  bottom: 0,
                }}
                variant="outlined"
              >
                Click Here to download Resume
              </Button>
            </a>
          </>
        )}
      </div>
    </div>
  );
}
