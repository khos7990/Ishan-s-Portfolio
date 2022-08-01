import { Typography } from '@mui/material'
import Typewriter from 'typewriter-effect';
import React from 'react'
import { useEffect, useRef } from 'react'
import './Home.css'
import photo from '../../photo.jpeg'
export default function Home() {

     

  return (
    <div>
        <div className='container'>
        <div className='introText'>
        <Typography sx={{mt: '150px', color: '#CCD1D1', mb: '20px' }} className='intro' variant='h1'> Hey! Thanks for stopping by!</Typography>
        <Typography sx={{mb: '50px'}} className='text' variant='h1'> My name is <Typography className='name' variant='h1' display='inline'> Ishan Khosla </Typography> </Typography>
        <Typography className='text' variant='h1'><Typewriter options={{loop: true, strings: ['Programmer.','Web Developer.'], autoStart: true}}/></Typography>
        </div>
        <div className='profileImg'>
            <img className='photo' src={photo}></img>
        </div>
        </div>




    </div>
  )
}
