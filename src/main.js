import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Kelsea Ryan Hunt</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/home">x</NavLink>
            </li>
            <li>
              <NavLink to="/stuff">x</NavLink>
            </li>
            <li>
              <NavLink to="/contact">x</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/home" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
