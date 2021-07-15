import React, { Component } from "react";
import "materialize-css";
import { Collapsible, CollapsibleItem } from "react-materialize";
import number from "./images/number.PNG";

class Contact extends Component {
  render() {
    return (
      <div>
        <Collapsible accordion popout>
          <CollapsibleItem expanded={false} header="CALL" node="div">
            <a href="tel:843-822-9802" className="contactinfo">
              <img src={number} alt="8438229802" />
            </a>
          </CollapsibleItem>
          <CollapsibleItem expanded={false} header="CHAT" node="div">
            Yeah, you do seem to have a little 'shit creek' action going.
          </CollapsibleItem>
          <CollapsibleItem expanded={false} header="CONNECT" node="div">
            You know, FYI, you can buy a paddle. Did you not plan for this
            contingency?
          </CollapsibleItem>
          <CollapsibleItem expanded={false} header="REVIEW" node="div">
            You know, FYI, you can buy a paddle. Did you not plan for this
            contingency?
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}

export default Contact;
