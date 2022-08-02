import { CardContent, CardMedia, ToggleButton, Typography } from '@mui/material'
import { useState } from 'react'
import Card from '@mui/material/Card'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './Projects.css'


export default function Projects() {

    
    const projects = [
        {
            name: "Grow Together",
            images: [require('../../Pictures/Grow-Together/LOGIN.png'), require('../../Pictures/Grow-Together/HOME.png'), require('../../Pictures/Grow-Together/BESTMATCH.png'),require('../../Pictures/Grow-Together/MYPLANTS.png')],
            description: "A React.js based frontend with a backend running Django REST Framework with PostgreSQL. Using PlantNet's machine's learning api, users are able to upload photos and have their plant identified. Our webscrapped database will then find the plant match, and pull out the different charactersitics of the plant,and\
            will then suggest different plants that fit the same charactersitics. Users are then able to match with different plants, and are able to view all matches! Try it out!"
        },

        {
            name: "BlackJack",
            images: [require("../../Pictures/blackjack.png")],
            description: "testing if this works"
        }
        
        
        
    ]
    
    const [projectName, setProjectName] = useState(projects[0].name)
    const [projectImages, setProjectImages] =useState(projects[0].images)
    const [projectDescription, setProjectDescription] = useState(projects[0].description)
    


        
        const images = projectImages.map((image) => (
            <Card sx={{maxWidth: 650, margin: '0 auto', backgroundColor: 'primary.main', border: 1, height: 700}}>
            <CardMedia sx={{objectFit: 'fill'}}
            component="img"
            image={image}
            alt="green iguana">
            </CardMedia>
            </Card>
        ))

        function nextBtn (e) {
          for(let i = 0; i<projects.length; i++) {
            setProjectName(projects[i].name)
            setProjectImages(projects[i].images)
            setProjectDescription(projects[i].description)
          }
        }

        function prevBtn (e) {
            for(let i = 0; i<projects.length; i--) {
                setProjectName(projects[i].name)
                setProjectImages(projects[i].images)
                setProjectDescription(projects[i].description)
              }
        }

  
    return (
        <div>
    <Card sx={{maxWidth: 650, height: 970, margin: '0 auto', mt: 10, backgroundColor: 'primary.main', border: 1, position: 'relative'}}>
        <Carousel>
            {images}
        </Carousel>
        <Box>
                <Card sx={{maxWidth: 650, margin: '0 auto', bottom: 0, position: 'absolute', backgroundColor: 'primary.main', border: 1}}>
                <Typography sx={{textAlign: 'center'}} variant='h4' color='secondary.main' >{projectName}</Typography>
                <CardContent sx={{width: 625, height: 180}}>
                    <Typography fontSize='20px' color='secondary.main'> {projectDescription}</Typography>
                </CardContent>
             </Card>
             </Box>

       
    </Card>
        <div className='nextBtn'>
        <ToggleButton>
            <ArrowForwardIosIcon onClick={nextBtn} sx={{color: 'secondary.main',fontSize: '10rem'}}/>
        </ToggleButton>
        </div>
        <div className='previousBtn'>
            <ToggleButton>
                <ArrowBackIosNewIcon onClick={prevBtn} sx={{color: 'secondary.main', fontSize: '10rem'}}/>
            </ToggleButton>
        </div>
        </div>
  )
}

