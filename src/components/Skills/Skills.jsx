import { Button, Typography } from "@mui/material";
import React from "react";
import Resume from '../../Resume/Resume.pdf'
import ResumeScreenshot from '../../Resume/Resume-screenshot.png'
import "./Skills.css";

export default function Education() {
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
  ))
  return (
    <div className="skill-container">
      {/* <div className="title"><Typography sx={{marginLeft: -50, fontSize: 50}} variant="h1" color='secondary.main'>Technologies</Typography></div> */}
      <div className="icon-container">
        {displayIcons}
      </div>
      <div className="resume-container">
        <Typography variant='h3' color='secondary.main' sx={{textAlign: 'center'}}>My Resume</Typography>
        <div className="resume">
        <img className="resumepic" src={ResumeScreenshot}></img>
        </div>
        <a href={Resume} download={Resume}>
          <Button sx={{fontSize: 50, position: 'absolute', bottom: 0 }} variant="contained" >Click Here to download Resume</Button>
        </a>
      </div>
    </div>
  );
}
