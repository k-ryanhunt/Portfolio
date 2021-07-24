import React, { Component } from "react";
import "materialize-css";
import resume from "./images/resume.png";
import phonenumber from "./images/number.PNG";
import emailhandle from "./images/email.png";
import linkedinprofile from "./images/linkedin.png";
import githubuser from "./images/github.png";

class Contact extends Component {
  render() {
    return (
      <div>
        <a href="https://drive.google.com/file/d/1XF3GxzAMLUK7u0RNczBxhDBcB_NzU8vs/view?usp=sharing">
          <img src={resume} alt="Resume" className="contactme" />
        </a>
        <a href="tel:843-822-9802">
          <img src={phonenumber} alt="8438229802" className="contactme" />
        </a>
        <a href="mailto:hunt.kelsearyan@gmail.com">
          <img src={emailhandle} alt="hunt.kelsearyan@gmail.com" className="contactme" />
        </a>
        <a
          href="https://www.linkedin.com/in/k-ryanhunt/"
          className="contactinfo"
        >
          <img src={linkedinprofile} alt="LinkedIn" className="contactme" />
        </a>
        <a href="https://github.com/k-ryanhunt">
          <img src={githubuser} alt="GitHub" className="contactme" />
        </a>
      </div>
    );
  }
}

export default Contact;
