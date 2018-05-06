import React from "react";
const logo = require("../../../public/logo.png");
const Header = ({ onDispalyCv }) => {
  return (
    <div className="header">
      <div id="logo">
        <img src={logo} alt="" />
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#" id="display-cv" onclick={onDispalyCv}>
                Cv
              </a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
