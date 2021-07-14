import React from "react";
import "../../App.css";
import "./badge.css";
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

const badge = () => {
  return (
    <div className="container">
      <div className="row">
        <img className="col s6 m3 l3" src={Slide1} alt="MongoDB" />
        <img className="col s6 m3 l3" src={Slide2} alt="Express.JS" />
        <img className="col s6 m3 l3" src={Slide3} alt="React.JS" />
        <img className="col s6 m3 l3" src={Slide4} alt="Node.JS" />
        <img className="col s6 m3 l3" src={Slide5} alt="GitHub" />
        <img className="col s6 m3 l3" src={Slide6} alt="GitBash" />
        <img className="col s6 m3 l3" src={Slide7} alt="VSCode" />
        <img className="col s6 m3 l3" src={Slide8} alt="MySQL" />
        <img className="col s6 m3 l3" src={Slide9} alt="Mongoose" />
        <img className="col s6 m3 l3" src={Slide10} alt="Bootstrap" />
        <img className="col s6 m3 l3" src={Slide11} alt="Webpack" />
        <img className="col s6 m3 l3" src={Slide12} alt="Express Handlebars" />
      </div>
    </div>
  );
};
export default badge;