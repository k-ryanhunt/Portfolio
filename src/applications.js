import React, { Component } from "react";
import Slide1 from "./images/Slide1.PNG";
import Slide2 from "./images/Slide2.PNG";
import Slide3 from "./images/Slide3.PNG";
import Slide4 from "./images/Slide4.PNG";
import Slide5 from "./images/Slide5.PNG";
import Slide6 from "./images/Slide6.PNG";
import Slide7 from "./images/Slide7.PNG";
import Slide8 from "./images/Slide8.PNG";
import Slide9 from "./images/Slide9.PNG";
import Slide10 from "./images/Slide10.PNG";
import Slide11 from "./images/Slide11.PNG";
import Slide12 from "./images/Slide12.PNG";

class Application extends Component {
  render() {
    return (
      <div>
        <div class="figure">
          <img src={Slide1} alt="MongoDB" />
          <img src={Slide2} alt="Express.JS" />
          <img src={Slide3} alt="React.JS" />
          <img src={Slide4} alt="Node.JS" />
        </div>
        <div class="figure">
          <img src={Slide5} alt="GitHub" />
          <img src={Slide6} alt="GitBash" />
          <img src={Slide7} alt="VSCode" />
          <img src={Slide8} alt="MySQL" />
        </div>
        <div class="figure">
          <img src={Slide9} alt="Mongoose" />
          <img src={Slide10} alt="Bootstrap" />
          <img src={Slide11} alt="Webpack" />
          <img src={Slide12} alt="Handlebars" />
        </div>
      </div>
    );
  }
}

export default Application;
