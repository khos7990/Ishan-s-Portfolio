import { Typography } from '@mui/material'
import { Container, Box } from '@mui/system'
import photo from '../../photo.jpeg'
import React from 'react'
import "./about.css"

export default function about() {
  return (
    <div>
      <Container sx={{ mt:'80px' }} maxWidth="lg">
        <Box sx={{height:'80vh', bgcolor:'#64828E',opacity:'.8'}}>
        <Typography variant='h4' sx={{textAlign: 'center'}}>About Me</Typography>
        <div class='photoContainer'><img class="photo" src={photo}></img></div>
        <Typography variant='h5'> Hey, my name is Ishan and i'm happy you've came to visit my site. Let me start off by telling you that I am from Missisauga, Ontario, Canada. I graduated from
          Wilfrid Laurier University and Conestoga College in Brantford, Ontario. After graduating, I did a couple of different jobs to gain different types of skills and experience, 
          but I still was not satisfied with what I was doing. I then decided to take a leap of faith and join a coding bootcamp with General Assembly in March of 2022, which was the best 
          decision I have made! I am now doing what I enjoy which is creating projects, and solving challenges. In my free time, I enjoy the outdoors by walking, or playing sports, as well as
          lifing weights as I am a daily gym goer. Music has always been a passion of mine as well. With whatever task that I am doing, I probably am listening to music in the background,
          it's what keeps me going...Besides listening to music, I also like creating music using softwares such as Fl studio. As you see my hobbies also reflect my passion towards programming, as 
          weightlifting brings out my eager for challenges, and music production enables my creativiness.
        </Typography>

        </Box>
      



      </Container>
    </div>
  )
}
