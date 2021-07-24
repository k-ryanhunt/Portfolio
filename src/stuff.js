import React, { Component } from "react";
import "materialize-css";
import { Carousel } from "react-materialize";
import project1 from "./images/placeholder/Slide6.PNG";
import project2 from "./images/placeholder/Slide7.PNG";
import project3 from "./images/placeholder/Slide8.PNG";
import project4 from "./images/placeholder/Slide9.PNG";

class Stuff extends Component {
  render() {
    return (
      <div>
        <Carousel
          carouselId="Carousel-2"
          className="white-text center"
          options={{
            fullWidth: true,
            indicators: true,
          }}
        >
          <a
            className="carousel-item"
            href="https://github.com/k-ryanhunt/Project-One-Concert-Finder"
          >
            <img src={project1} alt="Concert Finder Project" />
          </a>
          <a
            className="carousel-item"
            href="https://github.com/k-ryanhunt/Project-2-Travel-Green"
          >
            <img src={project2} alt="Tripr Project" />
          </a>
          <a
            className="carousel-item"
            href="https://github.com/k-ryanhunt/Timed-Quiz"
          >
            <img src={project3} alt="Timed Quiz" />
          </a>
          <a
            className="carousel-item"
            href="https://github.com/k-ryanhunt/Day-Planner"
          >
            <img src={project4} alt="Day Planner" />
          </a>
        </Carousel>
      </div>
    );
  }
}

export default Stuff;
