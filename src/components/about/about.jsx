import { Typography } from '@mui/material'
import { Container, Box } from '@mui/system'
import photo from '../../photo.jpeg'
import React from 'react'
import "./about.css"

export default function about() {
  function animate (e) {
    // e.target.className = "animate photo"
    console.log(e.target)
  }

  return (
    <div>
      <Container sx={{ mt:'80px'}} maxWidth="xl">
        <Box className='container' sx={{height:'80vh', opacity:'.8', backgroundColor:'#34495E', '&:hover': {backgroundColor: '#85929E'}, borderRadius: 20}}>

        <Typography variant='h4' sx={{textAlign: 'center', fontWeight: 'bold'}}>About Me</Typography>

        <div className='photoContainer' onMouseEnter={animate}><img className="photo" src={photo}></img></div>

        <Box  sx={{ margin: '0 auto', '&:hover': {color: '#145A32', fontSize: '30px'}}} maxWidth="lg" textAlign='center'>
          
          <Typography className='text' variant='h5' sx={{fontFamily: "monospace", wordSpacing: 10}}>Hey, my name is Ishan and i'm happy you've came to visit my site. Let me start off by telling you that I am from Missisauga, Ontario, Canada. I graduated from
          Wilfrid Laurier University and Conestoga College in Brantford, Ontario. After graduating, I did a couple of different jobs to gain different types of skills and experience, 
          but I still was not satisfied with what I was doing. I then decided to take a leap of faith and join a coding bootcamp with General Assembly in March of 2022, which was the best 
          decision I have made! I am now doing what I enjoy which is creating projects, and solving challenges. In my free time, I enjoy the outdoors by walking, or playing sports, as well as
          lifing weights as I am a daily gym goer. Music has always been a passion of mine as well. With whatever task that I am doing, I probably am listening to music in the background,
          it's what keeps me going...Besides listening to music, I also like creating music using softwares such as Fl studio. As you see my hobbies also reflect my passion towards programming, as 
          weightlifting brings out my eager for challenges, and music production enables my creativiness.
        </Typography>
        
        </Box>
        
        </Box>
      



      </Container>
    </div>
  )
}
