import React, { Component } from "react";
import applications from "../src/images/applications.PNG"

class Application extends Component {
  render() {
    return (
      <div>
        <img src={applications} alt="Applications I have used" className="applications" />
      </div>
    );
  }
}

export default Application;
