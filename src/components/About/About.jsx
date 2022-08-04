import { Button, Typography } from "@mui/material";
import React from "react";
import Resume from '../../Resume/Resume.pdf'
import ResumeScreenshot from '../../Resume/Resume-screenshot.png'
import "./About.css";

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
    <div className="skill-container" id="about">
      <div className='about'>
        <Typography variant='h4' className='text' sx={{textAlign: 'center', fontWeight: 'bold'}}>About Me</Typography>
        <Typography className='text' variant='h5'>Hey, my name is Ishan and i'm happy you've came to visit my site. Let me start off by telling you that I am from Missisauga, Ontario, Canada. I graduated from
          Wilfrid Laurier University and Conestoga College in Brantford, Ontario. After graduating, I did a couple of different jobs to gain different types of skills and experience, 
          but I still was not satisfied with what I was doing. I then decided to take a leap of faith and join a coding bootcamp with General Assembly in March of 2022, which was the best 
          decision I have made! I am now doing what I enjoy which is creating projects, and solving challenges. In my free time, I enjoy the outdoors by walking, or playing sports, as well as
          lifing weights as I am a daily gym goer. Music has always been a passion of mine as well. With whatever task that I am doing, I probably am listening to music in the background,
          it's what keeps me going...Besides listening to music, I also like creating music using softwares such as Fl studio. As you see my hobbies also reflect my passion towards programming, as 
          weightlifting brings out my eager for challenges, and music production enables my creativiness.
        </Typography>

        </div>
      <div className="technologies">
     
      <div className="title"><Typography sx={{fontSize: 50}} variant="h1" color='secondary.main'>My Skills</Typography></div>
     
      <div className="icon-container"> {displayIcons} </div>
      
      </div>
      
      <div className="resume-container">
        <Typography variant='h3' color='secondary.main' sx={{textAlign: 'center'}}>My Resume</Typography>
        <div className="resume">
        <img className="resumepic" src={ResumeScreenshot}></img>
        </div>
        <a href={Resume} download={Resume}>
          <Button sx={{fontSize: 48, color: 'secondary.main', position: 'absolute', bottom: 0 }} variant="contained" >Click Here to download Resume</Button>
        </a>
      </div>
    </div>
  );
}
