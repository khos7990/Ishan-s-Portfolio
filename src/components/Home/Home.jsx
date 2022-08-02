import { Typography } from '@mui/material'
import Typewriter from 'typewriter-effect';
import React from 'react'
import { useEffect, useRef } from 'react'
import './Home.css'
import photo from '../../photo.jpeg'
export default function Home() {

     

  return (
    <div className='container'>
        <div>
        <div className='introText'>
        <Typography sx={{mt: '150px', color: '#CCD1D1', mb: '20px' }} className='intro' variant='h1'> Hey! Thanks for stopping by!</Typography>
        <Typography sx={{mb: '50px'}} className='text' variant='h1'> My name is <Typography className='name' variant='h1' display='inline'> Ishan Khosla </Typography> </Typography>
        <Typography className='text' variant='h1'><Typewriter options={{loop: true, strings: ['Programmer.','Web Developer.'], autoStart: true}}/></Typography>
        </div>
        <div className='profileImg'>
            <img className='photo' src={photo}></img>
        </div>

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

        </div>




    </div>
  )
}
