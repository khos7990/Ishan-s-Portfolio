import {
  CardContent,
  CardMedia,
  ToggleButton,
  Typography,
  Button,
} from "@mui/material";
import { useState, useRef } from "react";
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
      deploymentLink: "https://grow-together-frontend.herokuapp.com/",
      code: "https://github.com/khos7990/grow_together__React-Django",
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
      deploymentLink: "https://traders-watch.herokuapp.com",
      code: "https://github.com/khos7990/Trade-Watchlist",
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
      deploymentLink: "https://marvelous-page.herokuapp.com/movies",
      code: "https://github.com/khos7990/Marvel-App",
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
      deploymentLink: "https://khos7990.github.io/BlackJack-Project/",
      code: "https://github.com/khos7990/BlackJack-Project",
    },
  ];

  const [projectName, setProjectName] = useState(projects[0].name);
  const [projectImages, setProjectImages] = useState(projects[0].images);
  const [projectDescription, setProjectDescription] = useState(
    projects[0].description
  );
  const [deploymentLink, setdeploymentLink] = useState(
    projects[0].deploymentLink
  );
  const [code, setCode] = useState(projects[0].code);
  const [showNextIcon, setshowNextIcon] = useState(true);
  const [showPrevIcon, setshowPrevIcon] = useState(false);

  const images = projectImages.map((image) => (
    <Card
      sx={{
        maxWidth: 1250,
        backgroundColor: "primary.main",
        height: 500,
        backgroundColor: "transparent",
        border: "2px solid yellow",
      }}
    >
      <CardMedia
        sx={{ objectFit: "scale-down", height: 500 }}
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

        if (nextIndex < 3) {
          setProjectName(projects[nextIndex].name);
          setProjectImages(projects[nextIndex].images);
          setProjectDescription(projects[nextIndex].description);
          setdeploymentLink(projects[nextIndex].deploymentLink)
          setCode(projects[nextIndex].code)
          setshowPrevIcon(true);
        } else if (nextIndex === 3) {
          setProjectName(projects[nextIndex].name);
          setProjectImages(projects[nextIndex].images);
          setProjectDescription(projects[nextIndex].description);
          setdeploymentLink(projects[nextIndex].deploymentLink)
          setCode(projects[nextIndex].code)
          setshowNextIcon(false);
        }
      }
    });
  }

  function prevBtn(e) {
    projects.findIndex(function (project, idx) {
      let index = project.name === projectName;
      if (index === true) {
        let prevIndex = idx - 1;
        if (prevIndex > 0) {
          setProjectName(projects[prevIndex].name);
          setProjectImages(projects[prevIndex].images);
          setProjectDescription(projects[prevIndex].description);
          setdeploymentLink(projects[prevIndex].deploymentLink)
          setCode(projects[prevIndex].code)
          setshowNextIcon(true);
        } else if (prevIndex === 0) {
          setProjectName(projects[prevIndex].name);
          setProjectImages(projects[prevIndex].images);
          setProjectDescription(projects[prevIndex].description);
          setdeploymentLink(projects[prevIndex].deploymentLink)
          setCode(projects[prevIndex].code)
          setshowPrevIcon(false);
        }
      }
    });
  }

  return (
    <div className="projects" id="projects">
      <div className="project-container">
        <Card
          sx={{
            maxWidth: 775,
            height: 840,
            margin: "0 auto",
            mt: 10,
            backgroundColor: "transparent",
            borderRadius: 10,
            position: "relative",
          }}
        >
          {projectName}
          <Carousel>{images}</Carousel>
          <Card
            sx={{
              maxWidth: 1250,
              margin: "0 auto",
              bottom: 0,
              height: 250,
              position: "absolute",
              backgroundColor: "black",
              opacity: 0.9,
            }}
          >
            <CardContent sx={{ width: 750, height: 140 }}>
              <Button
                sx={{ marginRight: 3 }}
                variant="outlined"
                color="secondary"
                href={deploymentLink}
              >
                Deployment Link
              </Button>
              <Button variant="outlined" color="secondary" href={code}>
                Code
              </Button>
              <Typography mt="5px" fontSize="20px" color="secondary.main">
                {" "}
                {projectDescription}
              </Typography>
            </CardContent>
          </Card>
        </Card>
        <div className="nextBtn">
          {showNextIcon ? (
            <ToggleButton>
              <ArrowForwardIosIcon
                onClick={nextBtn}
                sx={{ color: "secondary.main", fontSize: "10rem" }}
              />
            </ToggleButton>
          ) : null}
        </div>
        <div className="previousBtn">
          {showPrevIcon ? (
            <ToggleButton>
              <ArrowBackIosNewIcon
                onClick={prevBtn}
                sx={{ color: "secondary.main", fontSize: "10rem" }}
              />
            </ToggleButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}
