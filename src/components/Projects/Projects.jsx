import {
  CardContent,
  CardMedia,
  ToggleButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Card from "@mui/material/Card";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      name: "Grow Together",
      images: [
        require("../../Pictures/Grow-Together/LOGIN.png"),
        require("../../Pictures/Grow-Together/HOME.png"),
        require("../../Pictures/Grow-Together/BESTMATCH.png"),
        require("../../Pictures/Grow-Together/MATCHES.png"),
        require("../../Pictures/Grow-Together/MYPLANTS.png"),
      ],
      description:
        "A mobile app using React.js in the frontend with a backend running Django REST Framework with PostgreSQL. Using PlantNet's machine's learning api, users are able to upload photos and have their plant identified. Our webscrapped database will then find the plant match, and pull out the different charactersitics of the plant,and\
            will then suggest different plants that fit the same charactersitics. Users are then able to match with different plants, and are able to view all matches! Try it out!",
    },

    {
      name: "Trade-Watchlist",
      images: [
        require("../../Pictures/Trade-Watchlist/Login.png"),
        require("../../Pictures/Trade-Watchlist/Home.png"),
        require("../../Pictures/Trade-Watchlist/Chart.png"),
      ],
      description:
        "Using the MERN Stack, users are able to search for their most interested entities, including currencies, stocks, crypto, commodities etc.. User's have the ability to save,\
            and delete entities according to their interests. When searching for an entity, user's are able to view a chart to have insight of how the entity is performing. The chart provides the highest price, lowest price, and closed price for that specific day. The chart has history of the performance of the entity from the last 10 days.",
    },

    {
      name: "Marvel-Movies",
      images: [
        require("../../Pictures/Marvel-Movies/Login.png"),
        require("../../Pictures/Marvel-Movies/Home.png"),
        require("../../Pictures/Marvel-Movies/Search.png"),
        require("../../Pictures/Marvel-Movies/Movie.png"),
        require("../../Pictures/Marvel-Movies/Review.png"),
      ],
      description:
        "Using a Marvel API, Users can search/click on a selected movie, and are able to read a brief overview about the movie, and watch the trailer. By using google Oauth, a user can log in and is able to perform CRUD functionality. User's can choose to create or update their review, and/or rating, and can also delete their review if they choose to do so.",
    },

    {
      name: "BlackJack",
      images: [
        require("../../Pictures/BlackJack/Home.png"),
        require("../../Pictures/BlackJack/Ace.png"),
        require("../../Pictures/BlackJack/Winner.png"),
        require("../../Pictures/BlackJack/Mobile.png"),
      ],
      description:
        "Using Vanilla JS, HTML, and CSS, users can experience the game of blackjack on their desktop or mobile devices. The game objective is to reach a score of 21, or have the closest number to 21, compared to any of the other players on the table. The face values of cards is the same numerical number which is counted towards the player's total. Royal cards, such as Kings, Queen's, and Jack's are valued at 10. (Ex. 10 Hearts + King Of Diamonds = 20). The Ace card is valued either at 11, or 1.",
    },
  ];

  const [projectName, setProjectName] = useState(projects[0].name);
  const [projectImages, setProjectImages] = useState(projects[0].images);
  const [projectDescription, setProjectDescription] = useState(
    projects[0].description
  );

  const images = projectImages.map((image) => (
    <Card
      sx={{
        maxWidth: 1250,
        margin: "0 auto",
        backgroundColor: "primary.main",
        border: 1,
        height: 650,
      }}
    >
      <CardMedia
        sx={{ objectFit: "fill", height: 750 }}
        component="img"
        image={image}
        alt="green iguana"
      ></CardMedia>
    </Card>
  ));

  function nextBtn(e) {
    projects.findIndex(function (project, idx) {
      let index = project.name === projectName;
      if (index === true) {
        let nextIndex = idx + 1;
        setProjectName(projects[nextIndex].name);
        setProjectImages(projects[nextIndex].images);
        setProjectDescription(projects[nextIndex].description);
      }
    });
  }

  function prevBtn(e) {
    projects.findIndex(function (project, idx) {
      let index = project.name === projectName;
      if (index === true) {
        let prevIndex = idx - 1;
        setProjectName(projects[prevIndex].name);
        setProjectImages(projects[prevIndex].images);
        setProjectDescription(projects[prevIndex].description);
      }
    });
  }

  return (
    <div>
      <Card
        sx={{
          maxWidth: 1250,
          height: 970,
          margin: "0 auto",
          mt: 10,
          backgroundColor: "primary.main",
          border: 1,
          position: "relative",
        }}
      >
        <Typography
          sx={{ textAlign: "center" }}
          variant="h4"
          color="secondary.main"
        >
          {projectName}
        </Typography>
        <Carousel>{images}</Carousel>
        <Box>
          <Card
            sx={{
              maxWidth: 1250,
              margin: "0 auto",
              bottom: 20,
              position: "absolute",
              backgroundColor: "primary.main",
            }}
          >
            <CardContent sx={{ width: 1200, height: 220 }}>
              <Typography fontSize="20px" color="secondary.main">
                {" "}
                {projectDescription}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Card>
      <div className="nextBtn">
        <ToggleButton>
          <ArrowForwardIosIcon
            onClick={nextBtn}
            sx={{ color: "secondary.main", fontSize: "10rem" }}
          />
        </ToggleButton>
      </div>
      <div className="previousBtn">
        <ToggleButton>
          <ArrowBackIosNewIcon
            onClick={prevBtn}
            sx={{ color: "secondary.main", fontSize: "10rem" }}
          />
        </ToggleButton>
      </div>
    </div>
  );
}
