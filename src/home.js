import React, { Component } from "react";
import "materialize-css";
import aboutme from "../src/images/aboutme.PNG";

class Home extends Component {
  render() {
    return (
      <div>
        <img src={aboutme} alt="About Me Unicorn" className="aboutme" />
      </div>
    );
  }
}

export default Home;
