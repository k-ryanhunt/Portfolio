import React, { Component } from "react";
import "materialize-css";
import { Collapsible, CollapsibleItem } from "react-materialize";
import phone from "./images/contact/Slide1.PNG";
import phonenumber from "./images/contactinfo/Slide1.PNG";
import email from "./images/contact/Slide2.PNG";
import emailhandle from "./images/contactinfo/Slide2.PNG";
import linkedin from "./images/contact/Slide3.PNG";
import linkedinprofile from "./images/contactinfo/Slide3.PNG";
import github from "./images/contact/Slide4.PNG";
import githubuser from "./images/contactinfo/Slide4.PNG";

class Contact extends Component {
  render() {
    return (
      <div className="figure">
        <div className="popoutitems">
          <Collapsible collapsible popout>
            <CollapsibleItem
              expanded={false}
              node="div"
              icon={<img src={phone} alt="Call me" />}
            >
              <a href="tel:843-822-9802" className="contactinfo">
                <img src={phonenumber} alt="8438229802" />
              </a>
            </CollapsibleItem>
          </Collapsible>
          <Collapsible collapsible popout>
            <CollapsibleItem
              expanded={false}
              node="div"
              icon={<img src={email} alt="Email" />}
            >
              <a
                href="mailto:hunt.kelsearyan@gmail.com"
                className="contactinfo"
              >
                <img src={emailhandle} alt="8438229802" />
              </a>
            </CollapsibleItem>
          </Collapsible>
          <Collapsible collapsible popout>
            <CollapsibleItem
              expanded={false}
              node="div"
              icon={<img src={linkedin} alt="LinkedIn" />}
            >
              <a
                href="https://www.linkedin.com/in/k-ryanhunt/"
                className="contactinfo"
              >
                <img src={linkedinprofile} alt="LinkedIn" />
              </a>
            </CollapsibleItem>
          </Collapsible>
          <Collapsible collapsible popout>
            <CollapsibleItem
              expanded={false}
              node="div"
              icon={<img src={github} alt="GitHub" />}
            >
              <a href="https://github.com/k-ryanhunt" className="contactinfo">
                <img src={githubuser} alt="GitHub" />
              </a>
            </CollapsibleItem>
          </Collapsible>
        </div>
      </div>
    );
  }
}

export default Contact;
