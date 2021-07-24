import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";
import Applications from "./applications";
import banner from './images/banner.png';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="">
          <div class="bg"></div>
          <div class="bg bg2"></div>
          <div class="bg bg3"></div>
          <header><img src={banner} alt="banner" /></header>
          <ul className="header">
            <li>
              <NavLink exact to="/home">
                {" "}
                about me
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff"> my work</NavLink>
            </li>
            <li>
              <NavLink to="/applications"> skills</NavLink>
            </li>
            <li>
              <NavLink to="/contact"> contact</NavLink>
            </li>
          </ul>
          {/* links on the homepage that take you to the listed components */}
          <div>
            <Route exact path="/home" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/applications" component={Applications} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
