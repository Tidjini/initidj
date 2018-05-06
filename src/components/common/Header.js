import React from "react";
import "../../css/animate.css";
import "../../css/style.css";

const logo = require("../../images/logo.png");

export default ({ onHomeClick, onCvClick }) => {
  return (
    <div className="header" style={{ display: "inline-block" }}>
      <div id="logo">
        <img src={logo} alt="" />
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#" onclick={onHomeClick}>
                Home
              </a>
            </li>
            <li>
              <a href="https://github.com/Tidjini/">Github</a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/tidjini-messaoudi-26837314b/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" id="display-cv" onclick={onCvClick}>
                Cv
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
