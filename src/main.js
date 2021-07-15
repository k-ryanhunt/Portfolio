import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";
import Applications from "./applications";
import aboutme from "./images/aboutme.PNG";
import portfolio from "./images/portfolio.PNG";
import applications from "./images/applications.PNG";
import contactme from "./images/contactme.PNG";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li>
              <NavLink exact to="/home">
                {" "}
                <img class="button" src={aboutme} alt="About Me" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff">
                {" "}
                <img class="button" src={portfolio} alt="Portfolio" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/applications">
                {" "}
                <img class="button" src={applications} alt="Applications" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                {" "}
                <img class="button" src={contactme} alt="Contact Me" />
              </NavLink>
            </li>
          </ul>
          <div className="content container">
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
