import { Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Resume from "../../Resume/Resume.pdf";
import ResumeScreenshot from "../../Resume/Resume-screenshot.png";
import photo from "../../photo.png";
import "./About.css";

export default function Education() {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.down("resume"));
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
          sx={{ textAlign: "center", fontWeight: "bold", mt: "0px" }}
        >
          About Me
        </Typography>
        <Typography
          className="text aboutme-text"
          sx={{
            fontSize: {
              desktop: "30px",
              laptop: "30px",
              resume: "30px",
              tablet: "20px",
              mobile: "20px",
            },
            wordSpacing: { desktop: 10, laptop: 10, tablet: 5, mobile: 2 },
          }}
          variant="h5"
        >
          Hey, my name is Ishan and thanks for coming to my site. I am doing
          what I enjoy which is creating projects, and solving challenges.
        </Typography>
      </div>
      <div className="technologies">
        <div className="title">
          <Typography
            sx={{
              fontSize: {
                desktop: "50px",
                laptop: "38px",
                tablet: "50px",
                mobile: "40px",
              },
              variant: {
                desktop: "h3",
                laptop: "h3",
                tablet: "h3",
                mobile: "h3",
              },
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
          <a className="resume-a" href={Resume} download={Resume}>
            <Button
              className="resumeBtn"
              sx={{
                fontSize: "20px",
                color: "secondary.main",
                textDecoration: "none",
                width: { tablet: "40vw", mobile: "100vw" },
                border: "2px solid #000000",
              }}
              variant="outlined"
            >
              View Resume
            </Button>
          </a>
        ) : (
          <>
            <Typography
              variant="h3"
              fontSize="38px"
              color="secondary.main"
              sx={{ textAlign: "center", mt: "15px" }}
              className="resume-title"
            >
              My Resume
            </Typography>
            <div className="resume">
              <img className="resumepic" src={ResumeScreenshot}></img>
            </div>
            <div className="resumeAtag">
              <a href={Resume} download={Resume}>
                <Button
                  className="ResumeBtn"
                  sx={{
                    fontSize: 38,
                    color: "secondary.main",
                    border: "2px solid black",
                    position: "absolute",
                    height: "13vh",
                    bottom: 0,
                    width: "40vw",
                  }}
                  variant="outlined"
                >
                  View Resume
                </Button>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
