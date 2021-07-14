import React from "react";
import "../../App.css";
import "./navbar.css";

const navbar = () => {
  return (
    <header>
      <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="/badges" class="brand-logo">
            Logo
          </a>
          <a href="/badges" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <a href="#test1">Test 1</a>
            </li>
            <li class="tab">
              <a class="active" href="#test2">
                Test 2
              </a>
            </li>
            <li class="tab">
              <a href="#test3">Test 3</a>
            </li>
            <li class="tab">
              <a href="#test4">Test 4</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">JavaScript</a>
        </li>
      </ul>

      <div id="test1" class="col s12">
        Test 1
      </div>
      <div id="test2" class="col s12">
        Test 2
      </div>
      <div id="test3" class="col s12">
        Test 3
      </div>
      <div id="test4" class="col s12">
        Test 4
      </div>
    </header>
  );
};

export default navbar;