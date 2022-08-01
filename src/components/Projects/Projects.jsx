import { CardContent, CardMedia, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box'
import BESTMATCH from '../../BESTMATCH.png'
import blackjack from '../../blackjack.png'
import './Projects.css'
export default function Projects() {
        
        const projects = [
            {
                name: "Grow Together",
                image: BESTMATCH,
                description: "A React.js based frontend with a backend running Django REST Framework with PostgreSQL. Using PlantNet's machine's learning api, users are able to upload photos and have their plant identified. Our webscrapped database will then find the plant match, and pull out the different charactersitics of the plant,and\
                will then suggest different plants that fit the same charactersitics. Users are then able to match with different plants, and are able to view all matches! Try it out!"
            },
            {
            name: "Example 2",
            image: blackjack,
            description: "testing another test omg test"
            }


        ]

        var items = ["Random Name #1", "Random Name #2","Hello World!"]
        

        const displayProject = projects.map((project) => (
             <Box>
                <Typography sx={{textAlign: 'center'}} variant='h4' color='secondary.main' >{project.name}</Typography>
                <CardMedia sx={{width: 625, margin: '0 auto'}}
                    component="img"
                    height="675"
                    image={project.image}
                    alt="grow-together-project-screenshots"/>
                <CardContent sx={{width: 625, height: 180}}>
                    <Typography fontSize='20px' color='secondary.main'> {project.description}</Typography>
                </CardContent>
             </Box>
           

        ))
  
    return (
        <div>
    <Card sx={{maxWidth: 650, margin: '0 auto', mt: 10, backgroundColor: 'primary.main', border: 1}}>
  
        <Carousel>
   
        {displayProject}
        

        </Carousel>
    </Card>

        </div>
  )
}

{/* <CardMedia sx={{width: 425, margin: '0 auto'}}
component="img"
height="675"
image={project.image}
alt="grow-together-project-screenshots"/> */}