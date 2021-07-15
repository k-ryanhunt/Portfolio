import React, { Component } from "react";
import Slide1 from "./images/Slide1.JPG";
import Slide2 from "./images/Slide2.JPG";
import Slide3 from "./images/Slide3.JPG";
import Slide4 from "./images/Slide4.JPG";
import Slide5 from "./images/Slide5.JPG";
import Slide6 from "./images/Slide6.JPG";
import Slide7 from "./images/Slide7.JPG";
import Slide8 from "./images/Slide8.JPG";
import Slide9 from "./images/Slide9.JPG";
import Slide10 from "./images/Slide10.JPG";
import Slide11 from "./images/Slide11.JPG";
import Slide12 from "./images/Slide12.JPG";

class Application extends Component {
  render() {
    return (
      <div class="figure">
        <img src= {Slide1} alt="MongoDB"/>
        <img src= {Slide2} alt="Express.JS"/>
        <img src= {Slide3} alt="React.JS"/>
        <img src= {Slide4} alt="Node.JS"/>
        <img src= {Slide5} alt="GitHub"/>
        <img src= {Slide6} alt="GitBash"/>
        <img src= {Slide7} alt="VSCode"/>
        <img src= {Slide8} alt="MySQL"/>
        <img src= {Slide9} alt="Mongoose"/>
        <img src= {Slide10} alt="Bootstrap"/>
        <img src= {Slide11} alt="Webpack"/>
        <img src= {Slide12} alt="Handlebars"/>
      </div>
    );
  }
}

export default Application;
